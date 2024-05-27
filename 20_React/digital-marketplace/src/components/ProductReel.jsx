import { products } from "@/data"
import { Link } from "react-router-dom"
import ProductListing from "./ProductListing"

const ProductReel = ({
    title,
    subtitle,
    href,
}) => {

    console.log(title, subtitle, href)

    return (
        <section className="py-12">
            <div className="md:flex md:items-center md:justify-between mb-4">
                <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                    {title ? <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1> : null}
                    {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
                </div>


                {href ? <Link to={href}
                    className="hidden text-sm font-medium text-blue-600 hover:text-blue-500  md:block"

                >Shop the collection <span aria-hidden >&rarr;</span></Link> : null}
            </div>


        <div className="relative">
                <div className="mt-6 flex items-center w-full">
                        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8 ">
                            {
                                products.map((product , i)=>(
                                    <ProductListing  key={i} product={product} index={i} />
                                ))
                            }

                        </div>
                </div>
        </div>

        </section>
    )

}

export default ProductReel