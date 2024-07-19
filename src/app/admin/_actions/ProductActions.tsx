"use client"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {  useTransition } from "react"
import { toggleProductAvailability } from "./products"
import { deleteProduct  } from "./products"


export function ActiveToggleDropdownItem({
    id,
    IsAvailableForPurchase,
}: {
    id: string
    IsAvailableForPurchase: boolean
}) {
    const [isPending, startTransition] =useTransition()
    return (
        <DropdownMenuItem 
        disabled ={isPending}
        onClick={() => {
            startTransition (async ()=> {
                await toggleProductAvailability(id,
                    !IsAvailableForPurchase)
            })
            
        }}>
            {IsAvailableForPurchase ? "Deactivate":"Activate"}
        </DropdownMenuItem>
    );
}
export function DeleteDropdownItem({
    id,
    disabled,
}:{
    id:string
    disabled:boolean
}
){
    const [isPending, startTransition] =useTransition()
    return (
        <DropdownMenuItem 
        disabled ={disabled || isPending}
        onClick={() => {
            startTransition (async ()=> {
                await deleteProduct(id,
    )
            })
            
        }}>
            Delete
        </DropdownMenuItem>
    );
}
