import { PageHeader } from "../_components/PageHeader";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHeader, TableHead, TableRow } from "@/components/ui/table";
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

function ProductsTable() {
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
        {/* Your table rows go here */}
      </TableBody>
    </Table>
    </div>
  );
}
