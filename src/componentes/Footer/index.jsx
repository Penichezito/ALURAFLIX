import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Alura Latam" />
      <p>Challenge Oracle Next Education - Developed By por Tiago Peniche</p>
    </footer>
  )
}

export default Footer