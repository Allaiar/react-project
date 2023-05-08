import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import OneProduct from "./pages/OneProduct";
import NotUndefined from "./pages/NotUndefined";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import png from "./img/projects/01.jpg";
import png1 from "./img/projects/02.jpg";
import png2 from "./img/projects/03.jpg";
import png3 from "./img/projects/04.jpg";
import png4 from "./img/projects/05.jpg";
import png5 from "./img/projects/06.jpg";
import bigPng from "./img/projects/01-big.jpg";
import bigPng1 from "./img/projects/02-big.jpg";
import bigPng2 from "./img/projects/03-big.jpg";
import bigPng3 from "./img/projects/04-big.jpg";
import bigPng4 from "./img/projects/05-big.jpg";
import bigPng5 from "./img/projects/06-big.jpg";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  const products = [
    { id: 0, src: png, title: "Gaming streeming portal" },
    { id: 1, src: png1, title: "Video service" },
    { id: 2, src: png2, title: "Video portal" },
    { id: 3, src: png3, title: "Dating app" },
    { id: 4, src: png4, title: "Landing" },
    { id: 5, src: png5, title: "Gaming community" },
  ];
  const bigproducts = [
    { id: 0, src: bigPng, title: "Gaming streeming portal" },
    { id: 1, src: bigPng1, title: "Video service" },
    { id: 2, src: bigPng2, title: "Video portal" },
    { id: 3, src: bigPng3, title: "Dating app" },
    { id: 4, src: bigPng4, title: "Landing" },
    { id: 5, src: bigPng5, title: "Gaming community" },
  ];
  return (
    <div className="App">
        <ScrollToTop />
        <Navbar />
      <Routes>
        <Route />
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Home products={products} />} />
        <Route path="Projects" element={<Projects products={products} />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route
          path="/OneProduct/:id"
          element={<OneProduct products={bigproducts} />}
        />
        <Route path="*" element={<NotUndefined />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
