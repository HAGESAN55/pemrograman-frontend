import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/create"
import NowPlaying from "./pages/movie/nowplaying";
import Popular from "./pages/movie/popular";
import TopRated from "./pages/movie/topRated";
import theme from "./utils/constant/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRated />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
