import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout(props) {
    return(
        <>
            <Navbar />
                <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default Layout;