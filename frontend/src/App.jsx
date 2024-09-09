import { Box,Button,useColorModeValue } from "@chakra-ui/react"
import {Route, Routes} from 'react-router-dom'
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { useProductStore } from "./store/product"

function App() {
  const {product} = useProductStore
  return (
    <Box minH={"100vh"}  bg={useColorModeValue("white.100","gray.90")}>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
