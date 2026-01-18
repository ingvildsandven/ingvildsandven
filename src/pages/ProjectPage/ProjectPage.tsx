import { Link, useParams } from "react-router";
import style from "./ProjectPage.module.css";
import data from "../../api/projectData.json";
import { useEffect, useState } from "react";
import type { Project } from "../../types/project";
import SkillButton from "../../components/SkillButton/SkillButton";
import ImageGrid from "../../components/ImageGrid/ImageGrid";

function ProjectPage() {
  const [projectData, setProjectData] = useState<Project>({
    title: "",
    github: "",
    hosted: "",
    image: "",
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
      images: [],
      imagesFolder: "",
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

      <section className={style.linking_container}>
        {projectData.hosted ? (
          <SkillButton
            skill={"hosted"}
            logo={"/src/assets/icons/link.svg"}
            link={projectData.hosted}
          />
        ) : (
          ""
        )}
        <SkillButton
          skill={"GitHub"}
          logo={"/src/assets/icons/github.svg"}
          link={projectData.github}
        />{" "}
      </section>

      <div className={style.section_container}>
        <img src={projectData.image} className={style.image}></img>

        <h2 className={style.display_none}>About</h2>
        <section className={style.overview}>
          <article className={style.technology_article}>
            <h3 className={style.h3}>Technology</h3>
            <ul>
              {projectData.longDescription.technologyHighlights.map((tech) => {
                return (
                  <SkillButton
                    skill={tech.skill}
                    logo={tech.logo}
                    link={tech.link}
                  />
                );
              })}
            </ul>
          </article>
          <article className={style.highlights_article}>
            <h3 className={style.h3}>Highlights</h3>
            <ul>
              {projectData.longDescription.highlights.map((high) => {
                return <li key={high}>{high}</li>;
              })}
            </ul>
          </article>
          {projectData.collaborators[0] ? (
            <article className={style.collaborators_article}>
              <h3 className={style.h3}>Collaborators</h3>
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
            </article>
          ) : (
            ""
          )}
        </section>
      </div>

      <section className={style.description}>
        <div className={style.header_container}>
          <span className={style.line}></span>
          <h2>Description</h2>
        </div>
        <p>
          {" "}
          {projectData.startDate}{" "}
          {projectData.endDate ? "- " + projectData.endDate : ""}
        </p>
        <p>{projectData.longDescription.intro}</p>
        <h3 className={style.h3}>Motivation</h3>
        <p>{projectData.longDescription.motivation}</p>
        <h3 className={style.h3}>Process</h3>
        <p>{projectData.longDescription.process}</p>
        <h3 className={style.h3}>Future Additions</h3>

        <ul>
          {projectData.longDescription.futureAdditions.map((add) => {
            return <li key={add}>{add}</li>;
          })}
        </ul>

        {projectData.longDescription.imagesFolder ? (
          <>
            <div className={style.header_container}>
              <span className={style.line}></span>
              <h2>More Images</h2>
            </div>
            <ImageGrid
              images={projectData.longDescription.images}
              folderTitle={projectData.longDescription.imagesFolder}
            />
          </>
        ) : (
          ""
        )}
      </section>
    </main>
  );
}
export default ProjectPage;
