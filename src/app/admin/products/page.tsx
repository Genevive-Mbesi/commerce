import { PageHeader } from "../_components/PageHeader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from "@/components/ui/table";
import db from "@/db/db";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader> Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable/>
    </>
  );
}

async function ProductsTable() {
  const products =await db.product.findMany({select:{id:true,
    name:true,
    priceInCents:true, 
    IsAvailableForPurchase:true,
    filePath:true,
    _count: {select:{orders:true}}
  },
  orderBy:{name:'asc'}
})
if (products.length ===0)<p>No products found</p>
  return (
    <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0"> </TableHead>
          <span className="sr-only">Available For Purchase</span>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead></TableHead>
          <span className="sr-only" > Actions</span>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(product =>(
          <TableRow key={product.id}>
            <TableCell>
            {product.IsAvailableForPurchase ? (
              <>
              <CheckCircle2/>
              </>
              ) :(
                <>
                <XCircle/>
                </>
              
            )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
