import { Link, useParams } from "react-router";
import style from "./ProjectPage.module.css";
import data from "../../api/projectData.json";
import { useEffect, useState } from "react";
import type { Project } from "../../types/project";
import SkillButton from "../../components/SkillButton/SkillButton";

function ProjectPage() {
  const [projectData, setProjectData] = useState<Project>({
    title: "",
    github: "",
    hosted: "",
    image: [],
    shortDescription: "",
    startDate: "",
    endDate: "",
    collaborators: [{ name: "", email: "", github: "" }],
    longDescription: {
      intro: "",
      motivation: "",
      process: "",
      futureAdditions: [],
      technologyHighlights: [],
      highlights: [],
    },
  });
  const { title } = useParams();

  useEffect(() => {
    if (!title || !data?.projects) return;
    if (title)
      setProjectData(
        data?.projects?.[title.toLowerCase() as keyof typeof data.projects],
      );
  }, [title, data]);

  console.log(projectData);

  if (!projectData) {
    return (
      <main>
        <Link to="/" className={style.link}>
          Back
        </Link>{" "}
        <p>This project does not exist</p>
      </main>
    );
  }

  return (
    <main>
      <Link to="/" className={style.link}>
        Back
      </Link>

      <h1>{projectData.title}</h1>
      <section className={style.links}>
        <a href={projectData.hosted} rel="noopener noreffer" target="_blank">
          Hosted Link
        </a>

        <a href={projectData.github} rel="noopener noreffer" target="_blank">
          Github Link
        </a>

        <img src={projectData.image[0]} className={style.image}></img>
      </section>

      <h2>About</h2>
      <section className={style.overview}>
        <article className={style.technology_article}>
          <h3>Technology</h3>
          <ul>
            {projectData.longDescription.technologyHighlights.map((tech) => {
              return (<li key={tech}>{tech}</li>);
            })}
          </ul>
        </article>

        <article className={style.highlights_article}>
          <h3>Highlights</h3>
          <ul>
            {projectData.longDescription.highlights.map((high) => {
              return <li key={high}>{high}</li>;
            })}
          </ul>
        </article>

        <article className={style.collaborators_article}>
          <h3>Collaborators</h3>
          <ul>
            {projectData.collaborators.map((person) => {
              return (
                <article>
                  <h4>{person.name}</h4>
                  <SkillButton
                    skill={"GitHub"}
                    logo={"/src/assets/icons/github.svg"}
                    link={person.github}
                  />
                  <SkillButton
                    skill={"Mail"}
                    logo={"/src/assets/icons/mail.svg"}
                    link={"mailto:" + person.email}
                  />
                </article>
              );
            })}
          </ul>
        </article>
      </section>

      <h2>Description</h2>
      <section className={style.description}>
        <p>Start date: {projectData.startDate}</p>
        <p>End date: {projectData.endDate}</p>
        <p>{projectData.longDescription.intro}</p>
        <h3>Motivation</h3>
        <p>{projectData.longDescription.motivation}</p>
        <h3>Process</h3>
        <p>{projectData.longDescription.process}</p>
        <h3>Future Additions May Include...</h3>

        <ul>
          {projectData.longDescription.futureAdditions.map((add) => {
            return <li key={add}>{add}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}
export default ProjectPage;
