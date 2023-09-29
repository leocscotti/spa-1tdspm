import styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {
  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>CADASTRO DE PRODUTOS</h1>
        <button onClick={()=> props.setOpen(false)}>CLOSE-MODAL</button>
      </div>
    );
  }
}