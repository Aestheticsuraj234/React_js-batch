import React , {useState} from 'react'

const App = () => {
    // use State Hooks
    const [count , setCount] = useState(0);
    const [toggleMode , setToggleMode] = useState("dark");
    const [isDark , setIsDark] = useState(true);
    
     const toggleModeHandler = ()=>{
        if(isDark)
            {
                setToggleMode("light");
                setIsDark(false);
            }
            else
            {
                setToggleMode("dark");
                setIsDark(true);
            }
     }


     console.log(toggleMode)
    
    return (
    
    <div className={`h-screen flex justify-center items-center gap-6 ${(toggleMode==="dark" && isDark===true) ? "bg-gray-800 text-white": "bg-gray-100 text-black" }`}>
                <button onClick={()=>setCount(count+1)} className='bg-green-500 px-4 py-2 rounded-md  font-semibold text-xl'>+</button>
                <span className="text-xl font-bold ">{count}</span>
                <button  onClick={()=>setCount(count-1)} className='bg-red-500 px-4 py-2 rounded-md  font-semibold text-xl'>-</button>

                <button onClick={toggleModeHandler} className='bg-white px-4 py-2 rounded-md text-black font-semibold text-xl' >
                    {(toggleMode==="dark" && isDark===true) ? "Light Mode" : "Dark Mode"  }
                </button>
    </div>
  )
}

export default App


    // Hook Rules
    // There are 3 rules for hooks:
    
    // Hooks can only be called inside React function components.
    // Hooks can only be called at the top level of a component.
    // Hooks cannot be conditional