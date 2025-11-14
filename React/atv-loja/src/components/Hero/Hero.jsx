import Styles from "./Hero.module.css";
import ContainerTexto from "../ContainerTexto/ContainerTexto";
import Violoes from "../../assets/img/loja.jpg";

export default function Hero() {
  return (
    <section className={Styles.fundo_hero} id="hero">
      <ContainerTexto texto="Se você é um amante de música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!" />

      <img src={Violoes} alt="Galeria de instrumentos musicais" />
    </section>
  );
}
