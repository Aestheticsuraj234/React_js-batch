import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root"))


// wanted to write the above jsx in pure react


// let myH1 = React.createElement("h1" , null , "hello world")   bad approach

// let MyNAME = "Suraj Kumar Jha"

// react fragment
root.render(
   <>
      <App />
         
   </>
)
