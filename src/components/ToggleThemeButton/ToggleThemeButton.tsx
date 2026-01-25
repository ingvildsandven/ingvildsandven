import { useTheme } from "../../context/ThemeContext";
import style from "./ToggleThemeButton.module.css";

function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={style.slider} aria-label="Darkmode button">
      <span className={`${style.slider_ball} ${theme === "light" ? style.slider_light : style.slider_dark}`}/>
    </button>
  );
}

export default ToggleThemeButton;
