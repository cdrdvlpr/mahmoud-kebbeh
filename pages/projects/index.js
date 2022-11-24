import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { projectsData } from "../../data/data";

export const getStaticProps = () => {
  const allProjectsData = projectsData.projects;

  return {
    props: {
      projects: allProjectsData,
    },
  };
};

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Mahmoud Kebbeh | Projects</title>
      </Head>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <Link href={`/projects/${project.id}`} className="btn">
              <Image
                src={`/${project.slug}.jpg`}
                alt="project"
                width={400}
                height={400}
              />
              <h4>{project.name}</h4>
              <p className="details">{project.languages}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
