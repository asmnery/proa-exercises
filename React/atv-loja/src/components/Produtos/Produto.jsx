import Styles from "./Produto.module.css";
import Violao from "../../assets/img/guitarrinha.jpg";

export default function Produto() {
  return (
    <div className={Styles.fundo_produto}>
      <img src={Violao} alt="Violão" />
      <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
      <p className={Styles.preco}>R$ 989,50</p>
    </div>
  );
}
