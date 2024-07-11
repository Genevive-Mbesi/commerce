"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea} from "@/components/ui/textarea"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatters"
import {Button}from "@/components/ui/button"
import { addProduct } from "../_actions/products"


export  function ProductsForm() {
    const [priceInCents,setPriceInCents] = useState<number>()
  return (
    
        <form action={addProduct} className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="name"></Label>
            <Input type="text" id="name" required/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="name">Price In Cents</Label>
            <Input type="text" 
            id="name" 
            required 
            value={priceInCents} 
            onChange={e => setPriceInCents(Number (e.target.value) || undefined) }
            />
            <div className="text-muted-foreground">
                {formatCurrency((priceInCents || 0)/100)}

            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="name">Description</Label>
            <Textarea id="description" required/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input type="file" id="file" required/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input type="file" id="Image" required/>
        </div>
        <div>
        <Button type="submit">Save</Button>
        </div>
    </form>
  )
}
