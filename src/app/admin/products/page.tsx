import { PageHeader } from "../_components/PageHeader";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from "@/components/ui/table";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import Link from "next/link";
import { format } from "path";
import { ActiveToggleDropdownItem, DeleteDropdownItem } from "../_actions/ProductActions";

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
    imagePath:true,
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
              <span className="sr=only"></span>
              </>
              ) :(
                <>
                <span className="sr=only"></span>
                <XCircle/>
                </>
              
            )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.priceInCents/100)}</TableCell>
            <TableCell>{formatNumber(product._count.orders)}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                <MoreVertical/>
                <span className="sr-only">Actions</span>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a download href ={`/admin/products/${product.id}/download`} >Download</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href ={`/admin/products/${product.id}/edit`} >Edit</Link>
                    </DropdownMenuItem>
                    <ActiveToggleDropdownItem id={product.id}
                    IsAvailableForPurchase={product.IsAvailableForPurchase}
                    />
                    <DeleteDropdownItem id ={product.id} 
                    disabled ={product._count.orders> 0}
                    />
                  <DropdownMenuSeparator/>
                  </DropdownMenuContent>
                </DropdownMenuTrigger>
              </DropdownMenu>
              
            </TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
