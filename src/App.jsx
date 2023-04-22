import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Header from "./Components/Header"

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
