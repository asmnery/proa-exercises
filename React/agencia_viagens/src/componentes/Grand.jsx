import Style from "./css/grand.module.css";
import ComponenteProps from "./ComponenteProps";
import Simbolo_Grand from "../assets/imagens/grand-canyon.png";

function Grand() {
  return (
    <section className={Style.fundo_grand}>
      <h1>Venha conhecer o Grand Canyon!</h1>
      <ComponenteProps
        lugar="Grand Canyon"
        texto="O Grand Canyon é uma das maiores maravilhas naturais do mundo, localizado no estado do Arizona, nos Estados Unidos. "
        bandeira={Simbolo_Grand}
      />
    </section>
  );
}

export default Grand;
