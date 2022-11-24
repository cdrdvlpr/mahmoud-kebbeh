import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { projectsData } from "../../data/data";

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
