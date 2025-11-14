import Styles from "./Footer.module.css";
import Whats from "../../assets/img/whats.png";
import Insta from "../../assets/img/insta.png";
import Face from "../../assets/img/face.png";

export default function Footer() {
  return (
    <footer className={Styles.fundo_rodape}>
      <p>Nossa Loja - Instrumentos Musicais</p>
      <p>Rua Tito, 54 - Lapa</p>
      <p>São Paulo - Brasil</p>
      <div className={Styles.redes_sociais_icons}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Face} alt="Facebook" />
      </div>
    </footer>
  );
}
