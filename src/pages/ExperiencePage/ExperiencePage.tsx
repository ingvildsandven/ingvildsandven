import { useEffect, useMemo } from "react";
import experience from "../../api/experienceData.json";
import { Link, useParams } from "react-router";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import style from "./ExperiencePage.module.css";
import ToTopButton from "../../components/ToTopButton/ToTopButton";
import type { Experience } from "../../types/image";

function ExperiencePage() {
  const { title } = useParams();

  const data = useMemo<Experience | null>(() => {
    if (!experience || !title) return null;

    if (title === "Graphcore") return experience[0];
    if (title === "Online") return experience[1];

    return null;
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <main>
        {" "}
        <Link to="/" className={style.link}>
          Back
        </Link>{" "}
        <p>No experience with name {title} found.</p>
      </main>
    );
  }

  return (
    <main className={style.main}>
      <Link to="/" className={style.link}>
        Back
      </Link>

      <ToTopButton />

      <section className={style.info_container}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </section>
      <ImageGrid images={data.images} folderTitle={""} />
    </main>
  );
}
export default ExperiencePage;
