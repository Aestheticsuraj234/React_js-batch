import React, { useContext } from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Info, ShoppingCart } from 'lucide-react';
import EmptyCart from './EmptyCart';
import { Button } from '../ui/button';
import AddedProducts from './cart/AddedProducts';
import { GlobalContext } from '@/context/GlobalContext';

const Cart = () => {
    const { cart, removeToCart } = useContext(GlobalContext);

     console.log(cart.price)
  const TotalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(TotalPrice)
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {cart.length > 0 ? `Cart (${cart.length})` : "Cart"}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart {`(${cart.length})`}</SheetTitle>
                </SheetHeader>
                {cart.length > 0 ? (
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col items-center justify-start gap-y-3 w-full mx-4">
                            {cart.map((product, i) => (
                                <AddedProducts
                                    key={i}
                                    productImage={product.image}
                                    productName={product.title}
                                    features={["ui-kit", "landing page", "admin dashboard"]}
                                    price={product.price}
                                    onRemove={() => removeToCart(product)}
                                />
                            ))}
                        </div>
                        <div className="w-full h-0.5 bg-gray-200" />
                        {/* <div className='flex flex-col justify-start items-center gap-y-5 w-full'>
                            <div className='flex justify-between items-center px-4 py-2 w-full'>
                                <span className='text-md text-gray-700 font-bold uppercase'>Subtotal</span>
                                <span className='text-md font-semibold text-muted-foreground'>
                                    ${ totalPrice && formattedPrice(totalPrice)}
                                </span>
                            </div>
                            <div className='flex justify-between items-center px-4 py-2 w-full'>
                                <span className='text-sm text-gray-700'>Discount</span>
                                <span className='text-sm font-semibold text-muted-foreground'>
                                    -${discount && formattedPrice(discount)}
                                </span>
                            </div>
                            <div className='flex justify-between items-center px-4 py-2 w-full'>
                                <span className='text-sm text-gray-700 flex items-center gap-2'>Tax <Info className="h-4 w-4 text-muted-foreground" /></span>
                                <span className='text-sm font-semibold text-muted-foreground'>
                                    ${tax && formattedPrice(tax)}
                                </span>
                            </div>
                            <div className="w-full h-0.5 bg-gray-200" />
                            <div className='flex justify-between items-center px-4 py-2 w-full'>
                                <span className='text-md text-gray-700 font-bold uppercase'>Total</span>
                                <span className='text-md font-semibold text-muted-foreground'>
                                    ${formattedPrice(totalPrice + tax - discount)}
                                </span>
                            </div>
                            <div className="w-full flex flex-1 justify-center items-center mr-6">
                                <Button variant='default' size='lg' className='w-full'>
                                    Proceed to Checkout
                                </Button>
                            </div>
                        </div> */}
                    </div>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <EmptyCart />
                        <SheetTrigger asChild>
                            <Button variant='link' size='sm' className='text-sm text-muted-foreground'>
                                Add items to your cart to checkout
                            </Button>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
