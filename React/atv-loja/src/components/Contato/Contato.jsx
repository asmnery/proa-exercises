import Styles from "./Contato.module.css";
import Whats from "../../assets/img/whats.png";
import Insta from "../../assets/img/insta.png";
import Face from "../../assets/img/face.png";

export default function Contato() {
  return (
    <section className={Styles.fundo_contato} id="contato">
      <form>
        <label for="name">Entre com o seu nome:</label>
        <input
          type="text"
          id="nome"
          name="name"
          placeholder="Digite o seu nome aqui"
          required
          maxlength="100"
          autocomplete="name"
        />
        <label for="email">Entre com o seu e-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email aqui"
          required
          maxlength="254"
          autocomplete="email"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Faça seu pedido aqui:"
          required
          maxlength="2000"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div className={Styles.container_redes_socias}>
        <h2>Acesse também nossas redes sociais:</h2>

        <div className={Styles.redes_sociais_icons}>
          <img src={Whats} alt="WhatsApp" />
          <img src={Insta} alt="Instagram" />
          <img src={Face} alt="Facebook" />
        </div>
      </div>
    </section>
  );
}
