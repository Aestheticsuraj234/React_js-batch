import { Button } from "../ui/button";
import Cart from "./Cart";
import { Icons } from "./Icons"
import MaxWidthWrapper from "./MaxWidthWrapper"
import NavItems from "./NavItems"
import { ShoppingCart } from "lucide-react"


const Navbar = () => {
  const USER = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">

        <header className="relative bg-white">

        <MaxWidthWrapper>

        <div className="border-b border-gray-200 ">

        <div className="flex h-16 items-center">


            {/* logo */}
            <div className="ml-4 flex lg:ml-0">
                <Icons.logo className="h-10 w-10" />
            </div>

            {/* navlinks */}

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-center">

                <NavItems/>

            </div>

            {/* buttons */}

            <div className="ml-auto flex item-center">

<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

{USER ? null : (<Button variant="ghost">Sign In</Button>)}

{USER ? null : (<span className="h-6 w-px bg-gray-200"/>)}

{USER ? null : (<Button variant="ghost">Create Account</Button>)}

{USER ? null : (<span className="h-6 w-px bg-gray-200"/>)}

{USER ? null : (
  <div className="flex lg:ml-6">
   <span className="h-6 w-px bg-gray-200"/>

<div className="ml-4 flow-root lg:ml-6">
 <Cart/>
</div>

  </div>
)}

</div>

            </div>


        </div>

        </div>


        </MaxWidthWrapper>

        </header>

    </div>
  )
}

export default Navbar