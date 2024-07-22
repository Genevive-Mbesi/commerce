import db from "@/db/db"
import { PageHeader } from "../../../_components/PageHeader"
import { ProductsForm } from "../../../_components/ProductsForm"

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await db.product.findUnique({ where: { id } })

  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductsForm product={product} />
    </>
  )
}