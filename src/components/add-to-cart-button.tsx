'use client'

import { useCart } from '@/contexts/cart-context'

type AddToCartButtonProps = {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCard } = useCart()

  function handleAddProductToCard() {
    addToCard(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      type="button"
      onClick={handleAddProductToCard}
    >
      Adicionar ao carrinho
    </button>
  )
}
