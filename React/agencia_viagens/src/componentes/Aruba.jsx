import Style from "./css/Aruba.module.css";
import ComponenteProps from "./ComponenteProps";
import Simbolo_Aruba from "../assets/imagens/aruba.svg";

function Aruba() {
  return (
    <section className={Style.fundo_aruba}>
      <h1>Venha conhecer a Aruba!</h1>
      <ComponenteProps
        lugar="Aruba"
        texto="Aruba é uma ilha caribenha famosa por suas praias de areia branca e mar azul-turquesa. Com clima ensolarado o ano todo, é um destino perfeito para relaxar e aproveitar a natureza."
        bandeira={Simbolo_Aruba}
      />
    </section>
  );
}

export default Aruba;
