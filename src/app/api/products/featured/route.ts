import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = data.products.filter(({ featured }) => featured)

  return Response.json(featuredProducts)
}
