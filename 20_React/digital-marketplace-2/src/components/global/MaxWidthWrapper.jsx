import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({children , className}) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className )}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper

