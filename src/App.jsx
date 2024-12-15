import { BrowserRouter,  Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Bortfolio from "./components/Bortfolio/Bortfolio";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
export default function App() {
  return <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />} >

  <Route path="/Home" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Bortfolio" element={<Bortfolio />} />
  <Route path="/Contact" element={<Contact />} />

</Route>
</Routes>
</BrowserRouter>
  </>
}