import Styles from "./Endereco.module.css";
import ContainerTexto from "../ContainerTexto/ContainerTexto";

export default function Endereco() {
  return (
    <section className={Styles.fundo_endereco} id="endereco">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122783307642!2d-46.694340488454586!3d-23.528085878734384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1760063123331!5m2!1spt-BR!2sbr"></iframe>

      <ContainerTexto texto="Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m, com variada gama de instrumento, em um ambiente agradável para toda a família!" />
    </section>
  );
}
