import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const projectsData = {
  projects: [
    {
      slug: "currency-converter",
      name: "Currency Converter",
      link: "https://currency-converter-stq2.onrender.com/",
      languages: "React/HTML/CSS - REST API",
      id: 1,
    },
    {
      slug: "magic-match",
      name: "Magic Match",
      link: "https://magic-match.onrender.com/",
      languages: "React/HTML/CSS",
      id: 2,
    },
    {
      slug: "project-planner",
      name: "Project Planner",
      link: "https://project-planner.onrender.com/",
      languages: "Vue/HTML/CSS",
      id: 3,
    },
    {
      slug: "dice-roll",
      name: "Dice Roll",
      link: "https://cdrdvlpr.github.io/Pig-Game/",
      languages: "HTML/CSS/JavaScript",
      id: 4,
    },
    {
      slug: "guess-my-number",
      name: "Guess My Number",
      link: "https://cdrdvlpr.github.io/Guess-My-Number/",
      languages: "HTML/CSS/JavaScript",
      id: 5,
    },
    {
      slug: "leon-template",
      name: "Leon Template",
      link: "https://cdrdvlpr.github.io/Leon-Template-One/",
      languages: "HTML/CSS",
      id: 6,
    },
    {
      slug: "kasper-template",
      name: "Kasper Template",
      link: "https://cdrdvlpr.github.io/Kasper-Template-Two/",
      languages: "HTML/CSS",
      id: 7,
    },
    {
      slug: "cosmo-template",
      name: "Cosmo Template",
      link: "https://cdrdvlpr.github.io/Responsive-CSS-Grid/",
      languages: "HTML/CSS",
      id: 8,
    },
  ],
};

export const getStaticPaths = () => {
  const allData = projectsData.projects;

  const paths = allData.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;

  const allData = projectsData;

  const projectData = allData.projects;

  const allProjectsData = projectsData.projects;

  return {
    props: {
      project: projectData[id - 1],
      projects: allProjectsData,
    },
  };
};

export default function Project({ project, projects }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`${project.name} | Preview`}</title>
      </Head>

      <div className="project-details">
        <div className="btns">
          <div className="navigation-btns">
            <span className="btn" onClick={() => router.push(`/projects`)}>
              Back to all projects
            </span>
            <div>
              {/* {
                (project.id = 1 && (
                  <span
                    disabled
                    className="btn"
                    onClick={() => router.push(`/projects/${project.id - 1}`)}
                  >
                    Preview previous project
                  </span>
                ))
              } */}
              {project.id >= 2 && (
                <span
                  className="btn"
                  onClick={() => router.push(`/projects/${project.id - 1}`)}
                >
                  Preview previous project
                </span>
              )}
              {projects.length !== project.id && (
                <span
                  className="btn"
                  onClick={() => router.push(`/projects/${project.id + 1}`)}
                >
                  Preview next project
                </span>
              )}
            </div>
          </div>
          <Link href={project.link} target={project.name} className="btn visit">
            Visit this project
          </Link>
        </div>
        <p>Or preview here:</p>
        <iframe
          className="iframe"
          src={project.link}
          width="95%"
          height="600px"
          title="project"
        ></iframe>
      </div>
    </>
  );
}
