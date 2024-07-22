"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/formatters";
import { Button } from "@/components/ui/button";
import { addProduct } from "../_actions/products";
import { useFormState, useFormStatus } from "react-dom";

interface Product {
  id: string;
  name: string;
  priceInCents: number;
  filePath: string;
  imagePath: string;
  description: string;
  IsAvailableForPurchase: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductsFormProps {
  product: Product | null;
}

export function ProductsForm({ product }: ProductsFormProps) {
  const [error, action] = useFormState(addProduct, {});
  const [priceInCents, setPriceInCents] = useState<number>(product?.priceInCents || 0);
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" required defaultValue={product?.name || ''} />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="text"
          id="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || 0)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
          {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" required defaultValue={product?.description || ''} />
        {error.description && <div className="text-destructive">{error.description}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" required onChange={handleFileChange} />
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" required onChange={handleImageChange} />
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}</Button>;
}
