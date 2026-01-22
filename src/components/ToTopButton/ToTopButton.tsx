import style from "./ToTopButton.module.css";

function ToTopButton() {
  return (
    <a href="#" className={style.to_top}>
      <span className={style.to_top_icon}></span>
    </a>
  );
}
export default ToTopButton;
