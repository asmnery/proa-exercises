import Style from "./css/Escocia.module.css";
import ComponenteProps from "./ComponenteProps";
import Bandeira_escocia from "../assets/imagens/escocia.png";

function Escocia() {
  return (
    <section className={Style.fundo_escocia}>
      <h1>Venha conhecer a Escócia!</h1>
      <ComponenteProps
        lugar="Escócia"
        texto="A Escócia é um país fascinante, repleto de paisagens naturais deslumbrantes e uma rica herança cultural."
        bandeira={Bandeira_escocia}
      />
    </section>
  );
}

export default Escocia;
