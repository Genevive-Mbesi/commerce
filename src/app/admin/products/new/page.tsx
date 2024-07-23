import { PageHeader } from "../../_components/PageHeader";
import { ProductsForm } from "../../_components/ProductsForm";

export default function NewProductPage() {
  
  const defaultProduct = {
    id: '',
    name: '',
    priceInCents: 0,
    filePath: '',
    imagePath: '',
    description: '',
    IsAvailableForPurchase: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <>
      <PageHeader>Add Product</PageHeader>
      <ProductsForm product={defaultProduct} />
    </>
  );
}
