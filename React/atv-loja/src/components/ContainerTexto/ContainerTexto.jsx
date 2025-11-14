import Styles from "./ContainerTexto.module.css";

export default function ContainerTexto({ texto }) {
  return (
    <section className={Styles.fundo_conteiner}>
      <h1>Nossa Loja - Instrumentos Musicais</h1>
      <p>{texto}</p>
    </section>
  );
}
