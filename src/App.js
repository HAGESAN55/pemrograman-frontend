import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/page/about";
import GlobalMenu from "./pages/page/global-menu";
import IndonesiaMenu from "./pages/page/indonesia-menu";
import ProvinsiMenu from "./pages/page/provinsi-menu";


function App() {
        /*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */
  return (
    <>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/page/global-menu" element={<GlobalMenu />} />
          <Route path="/pages/page/indonesia-menu" element={<IndonesiaMenu />} />
          <Route path="/pages/page/provinsi-menu" element={<ProvinsiMenu />} />
          <Route path="/pages/page/about" element={<About />} />
        </Routes>
    </Layout>

    </>
  );
}

export default App;
