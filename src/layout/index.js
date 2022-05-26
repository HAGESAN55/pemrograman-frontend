import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;