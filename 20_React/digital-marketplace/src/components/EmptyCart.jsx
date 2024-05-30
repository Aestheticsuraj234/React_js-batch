

const EmptyCart = () => {
    return (
  
      <>
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <img
            src="/hippo-empty-cart.png"
            alt='Empty Cart'
            className='absolute inset-0 w-full h-full object-contain'
          />
  
        </div>
  
        <div className='text-xl font-semibold'>
          Your Cart is empty
        </div>
  
      </>
  
    )
  }
  
  export default EmptyCart