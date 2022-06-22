import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout(props) {
    return(
        <>
            <Navbar />
                <main>
                    <Container>{props.children}</Container>
                </main>
            <Footer />
        </>
    );
}

export default Layout;