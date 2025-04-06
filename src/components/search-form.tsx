'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const { q: query } = Object.fromEntries(formData)

    if (!query) return

    push(`/search?q=${query}`)
  }

  return (
    <form
      className="flex items-center w-[320px] gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      onSubmit={handleSearch}
    >
      <Search className="size-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        placeholder="Buscar produtos..."
        required
      />
    </form>
  )
}
