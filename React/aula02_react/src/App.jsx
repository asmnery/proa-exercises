import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Conteudo from "./componentes/Conteudo";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  return (
    <main className="principal">
      <Header />

      <Menu />

      <Conteudo />

      <Footer />
    </main>
  );
}

export default App;
