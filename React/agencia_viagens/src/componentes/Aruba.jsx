import Style from "./css/Aruba.module.css";
import ComponenteProps from "./ComponenteProps";
import Simbolo_Aruba from "../assets/imagens/aruba.svg";

function Aruba() {
  return (
    <section className={Style.fundo_aruba}>
      <h1>Venha conhecer a Aruba!</h1>
      <ComponenteProps
        lugar="Escócia"
        texto="A Escócia é um país fascinante, repleto de paisagens naturais deslumbrantes e uma rica herança cultural."
        bandeira={Simbolo_Aruba}
      />
    </section>
  );
}

export default Aruba;
