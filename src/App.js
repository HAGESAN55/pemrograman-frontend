// Import Halaman Home
import Home from "./pages/Home";
import Counter from "./components/Counter/Counter";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/* <Home /> */}
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
