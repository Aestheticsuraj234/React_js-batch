import { useState } from "react";
import { createContext } from "react";


export const GlobalContext = createContext();


const GlobalProvider = ({children})=>{

    // TODO: USE FETCH API AND GET DATA FROM GITHUB API AND STORE IT IN STATE AND PASS IT TO PROFILE COMPONENT

    const [data,setData] = useState("Hello world ")
    let myData = {
        name: "Suraj Kumar Jha",
        age: 20,
        city: "Noida"
    }

    return(
        <GlobalContext.Provider value={{data , myData}} >
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;


