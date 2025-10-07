import "./App.css";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Escocia from "./componentes/Escocia";
import Grand from "./componentes/Grand";
import Aruba from "./componentes/Aruba";
import Muralhas from "./componentes/Muralhas";

function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <Escocia />
        <Grand />
        <Aruba />
        <Muralhas />
        <Footer />
      </main>
    </>
  );
}

export default App;
