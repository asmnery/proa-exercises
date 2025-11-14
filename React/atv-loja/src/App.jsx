import "./App.css";
import Cabecalho from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Produtos from "./components/Produtos/Produtos";
import Endereco from "./components/Endereco/Endereco";
import Contato from "./components/Contato/Contato";
import Rodape from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Cabecalho />
      <section className="principal">
        <Hero />
        <Produtos />
        <Endereco />
        <Contato />
      </section>
      <Rodape />
    </>
  );
}

export default App;
