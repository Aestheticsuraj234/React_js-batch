import { Route, Routes } from "react-router-dom"
// import MaxWidthWrapper from "./components/MaxWidthWrapper"
import Home from "./components/Home/Home"


const App = () => {
  return (

    <Routes>
      <Route index element={<Home />} />
    </Routes>


  )
}

export default App