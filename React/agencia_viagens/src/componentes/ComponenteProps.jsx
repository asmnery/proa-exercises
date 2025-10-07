import Style from "./css/ComponenteProps.module.css";

function ComponenteProps({ lugar, texto, bandeira }) {
  return (
    <div className={Style.corpo_texto}>
      <h2>Venha conhecer esse lugar incrível - {lugar}!</h2>
      <p>{texto}</p>
      <img src={bandeira} alt="Logo da firma" className={Style.imagem_props} />
    </div>
  );
}

export default ComponenteProps;
