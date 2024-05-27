import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from './ui/skeleton'
import { PRODUCT_CATEGORIES } from '@/config'

const ProductListing = ({product , index}) => {

    const isVisibile = index < 4
   const label = PRODUCT_CATEGORIES.find(({value})=>value===product.category)?.label

  return (
    <Link href={product.id} className={cn('invisible h-full w-full cursor-pointer group/main' ,{
        "visible animate-in fade-in-5": isVisibile
    })} >
<div className='flex flex-col w-full'>
        <h3 className='mt-4 font-medium text-sm text-gray-700'>
            {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
            {label}
        </p>

        <p className='mt-1 font-medium text-sm text-gray-900'>{product.price}</p>
</div>
    </Link>
    
  )
}


export default ProductListing