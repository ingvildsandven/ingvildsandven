import { useEffect, useState } from "react";
import experience from "../../api/experienceData.json";
import { Link } from "react-router";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import style from "./ExperiencePage.module.css";

interface imagesArray {
  image: string;
  span: number;
}

type Experience = {
  title: string;
  images: imagesArray[];
  description: string;
};

function ExperiencePage() {
  const [data, setData] = useState<Experience>({
    title: "No experience found",
    images: [{ image: "", span: 0 }],
    description: "",
  });
  console.log(experience);

  console.log(experience[0].title);

  useEffect(() => {
    const urlArray = window.location.href.split("/");
    const title = urlArray[urlArray.length - 1];

    if (experience) {
      if (title == "Graphcore") {
        setData(experience[0]);
      } else if (title == "Online") {
        setData(experience[1]);
      }
    }
  }, []);

  return (
    <main className={style.main}>
      <Link to="/" className={style.link}>Back</Link>
      <section className={style.info_container}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </section>
      <ImageGrid images={data.images} folderTitle={data.title.toLowerCase()} />
    </main>
  );
}
export default ExperiencePage;
