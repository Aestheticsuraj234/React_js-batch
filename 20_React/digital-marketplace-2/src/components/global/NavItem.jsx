
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const NavItem = ({ category, onOpen, isOpen, isAnyOpen }) => {
    return (
        <div className="flex">
            <div className="relative flex items-center">
                <Button className='gap-1.5' onClick={onOpen}
                    variant={isOpen ? "secondary" : "ghost"}
                >
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
                        "-rotate-180": isOpen
                    })}
                    />
                </Button>
            </div>

            {isOpen ? (<div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", { "animte-in fade-in-10 slide-in-from-top-5": !isAnyOpen })}>

                <div className='absolute inset-0 top-1/2 bg-white shadow' />

                <div className='relative bg-white'>

                    <div className="mx-auto max-w-7xl px-8">

                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">

                            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                {
                                    category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm" >
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-10 group-hover:opacity-75">

                                                <img
                                                    src={item.imageSrc}
                                                    alt='Product Category Image'
                                                    className='object-cover w-full h-full object-center'
                                                />
                                            </div>

                                            {/* TODO ADD LINK LATER */}
                                            <div className="mt-6 block font-mediuM text-gray-900">
                                                {item.name}
                                            </div>
                                            <p className='mt-1' aria-hidden>Shop Now</p>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                </div>


            </div>) : null}


        </div>
    )
}

export default NavItem