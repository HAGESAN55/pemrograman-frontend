import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Hello from "../components/Hello";
import Tables from "../components/Tables"
import Addcase from "../components/Addcase";

function Main() {
  return (
    <main>
      <Hero />
      <Hello />
      <Content />
      <Tables />
      <Addcase />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
