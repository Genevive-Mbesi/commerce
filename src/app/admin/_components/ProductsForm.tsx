"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatters"
import { Button } from "@/components/ui/button"
import { addProduct } from "../_actions/products"
import { useFormState, useFormStatus } from "react-dom"

export function ProductsForm() {
  const [error, action] = useFormState(addProduct, {})
  const [priceInCents, setPriceInCents] = useState<number>()
  const [file, setFile] = useState<File | null>(null)
  const [image, setImage] = useState<File | null>(null)
  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="text"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={e => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
          {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
        {error.description && <div className="text-destructive">{error.description}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required onChange={e => setFile(e.target.files?.[0] || null)} />
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required onChange={e => setImage(e.target.files?.[0] || null)} />
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  )
}
function SubmitButton() {
  const { pending } = useFormStatus()
  return <Button type="submit" disabled={pending}>{pending ? 'Saving...' : 'Save'}</Button>
}
