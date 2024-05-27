import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
    const CART_ITEM_NUMBER = 3
  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-500"/>
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {CART_ITEM_NUMBER}
            </span>

    <SheetContent>
        Hello
    </SheetContent>
    

        </SheetTrigger>


    </Sheet>
  )
}

export default Cart