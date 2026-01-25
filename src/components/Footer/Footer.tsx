import SomeContainer from "../SomeContainer/SomeContainer";
import style from "./Footer.module.css"

function Footer(){
    return(<footer className={style.footer}>
        <h2>Contact me</h2>
        <SomeContainer/>
    </footer>)
}export default Footer;