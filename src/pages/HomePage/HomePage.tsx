import { useEffect, useRef, useState } from "react";
import ConstructionCompontent from "../../components/ConstructionComponent/ConstructionComponent";
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";
import SummaryComponent from "../../components/SummaryComponent/SummaryComponent";
import style from "./HomePage.module.css";

function HomePage() {
  const summaryRef = useRef(null);
  const [summaryHeight, setSummaryHeight] = useState(0);

  useEffect(() => {
    if (!summaryRef.current) return;

    const updateHeight = () => {
      setSummaryHeight(summaryRef.current.offsetHeight);
    }

    updateHeight();

    // Dont trigger every pixel change - but when the height is changed
    const resize = new ResizeObserver(updateHeight);
    resize.observe(summaryRef.current);

    return () => resize.disconnect();
  }, [])

  
  return (
    <main className={style.homepage_main} style={{ "--summary-h": `${summaryHeight}px` }}>
      <div className={style.summary_container} ref={summaryRef}>
        <h1>Ingvild Kirkaune Sandven</h1>
        <SummaryComponent />
      </div>

      <div className={style.overlay}>
        <ConstructionCompontent />
        <ExperienceComponent />
      </div>
    </main>
  );
}

export default HomePage;
