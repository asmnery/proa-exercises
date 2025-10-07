import Style from "./css/Muralhas.module.css";
import ComponenteProps from "./ComponenteProps";
import Simbolo_Muralha from "../assets/imagens/muralha-china.jpeg";

function Muralhas() {
  return (
    <section className={Style.fundo_muralhas}>
      <h1>Venha conhecer as Muralhas da China!</h1>
      <ComponenteProps
        lugar="Muralha da China"
        texto="A Muralha da China é uma das construções mais impressionantes do mundo, com milhares de quilômetros de extensão. Erguida para proteger o império chinês de invasões, ela atravessa montanhas, vales e desertos."
        bandeira={Simbolo_Muralha}
      />
    </section>
  );
}

export default Muralhas;
