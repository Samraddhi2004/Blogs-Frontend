import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Blogs from "./pages/Blogs"
import CreateBlog from "./pages/CreateBlog"

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
