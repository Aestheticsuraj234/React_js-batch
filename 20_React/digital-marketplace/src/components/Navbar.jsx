import { Link } from "react-router-dom"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"


const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: MOBILE NAV LATER */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : <Link to={"/sign-in"} className={buttonVariants({ variant: "ghost" })}>Sign In</Link>}
                  {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden />}
                  {user ? null : <Link to={"/sign-up"} className={buttonVariants({ variant: "ghost" })}>
                    CreateAccount
                  </Link>}
                  {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden />}

                  {user ? null : <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden />
                  </div>}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>

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