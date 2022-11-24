import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
      {/* <div className="projects">
        <div className="project">
          <Link
            href="https://currency-converter-stq2.onrender.com/"
            className="btn"
            target="Currency Converter"
          >
            <Image
              src={"/currency-converter.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Currency Converter</span>
            <p className="details">React/HTML/CSS - REST API</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://magic-match.onrender.com/"
            className="btn"
            target="Magic Match"
          >
            <Image
              src={"/magic-match.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Magic Match</span>
            <p className="details">React/HTML/CSS</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://project-planner.onrender.com/"
            className="btn"
            target="Project Planner"
          >
            <Image
              src={"/project-planner.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Project Planner</span>
            <p className="details">Vue/HTML/CSS</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://cdrdvlpr.github.io/Pig-Game/
            "
            className="btn"
            target="Dice Roll"
          >
            <Image
              src={"/dice-roll.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Dice Roll</span>
            <p className="details">HTML/CSS/JavaScript</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://cdrdvlpr.github.io/Guess-My-Number/
            "
            className="btn"
            target="Guess My Number"
          >
            <Image
              src={"/guess-my-number.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Guess My Number</span>
            <p className="details">HTML/CSS/JavaScript</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://cdrdvlpr.github.io/Leon-Template-One/"
            className="btn"
            target="Leon Template"
          >
            <Image
              src={"/leon-template.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Leon Template</span>
            <p className="details">HTML/CSS</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://cdrdvlpr.github.io/Kasper-Template-Two/"
            className="btn"
            target="Kasper Template"
          >
            <Image
              src={"/kasper-template.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Kasper Template</span>
            <p className="details">HTML/CSS</p>
          </Link>
        </div>
        <div className="project">
          <Link
            href="https://cdrdvlpr.github.io/Responsive-CSS-Grid/"
            className="btn"
            target="Cosmo Template"
          >
            <Image
              src={"/cosmo-template.jpg"}
              alt="project"
              width={400}
              height={400}
            />
            <span>Cosmo Template</span>
            <p className="details">HTML/CSS</p>
          </Link>
        </div>
      </div> */}
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
