import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";



const Cart = () => {

    const itemCount = 0;

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart aria-hidden className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0

                </span>
            </SheetTrigger>

            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className={"space-y-2.5 pr-6"}>

                    <SheetTitle>  Cart (0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            Cart items
                        </div>
                        <div className="space-y-4  pr-6">
                            <Separator />

                            <div className="space-y-1.5 pr-6">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                            </div>

                            <div className="space-y-1.5 pr-6">
                                <div className="flex">
                                    <span className="flex-1">Transction Fee</span>
                                    <span>
                                        {23}
                                    </span>
                                </div>
                            </div>
                        </div>



                        <SheetFooter>
                            <SheetTrigger asChild>
                                    <Link 
                                    href="/cart"
                                    className={buttonVariants({className:"w-full mx-2"})}
                                    >
                                        Continue to checkout
                                    </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                            <div aria-hidden className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <img
                                src="/hippo-empty-cart.png"
                                alt="Empty cart illustration"
                                className="absolute inset-0 w-full h-full object-contain"

                                />
                            </div>
                            <div className="text-xl font-semibold">
                                Your cart is empty
                            </div>
                            <SheetTrigger asChild>
                                <Link 
                                to="/products"
                                className={buttonVariants({
                                    variant:"link",
                                    size:"sm",
                                    className:"text-sm text-muted-foreground"
                                })}
                                >
                                   Add items to your cart to checkout
                                </Link>
                            </SheetTrigger>
                    </div>
                )}
            </SheetContent>

        </Sheet>
    )
}

export default Cart