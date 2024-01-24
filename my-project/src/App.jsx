import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Service } from "./pages/service";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Nav } from "./Components/Nav";
import { View } from "./pages/view"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/view" element={<View />} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}
