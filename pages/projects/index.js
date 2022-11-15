import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const res = async () => {
      axios.get();
    };
    console.log();
  }, []);

  return (
    <>
      <Head>
        <title>Mahmoud Kebbeh | Projects</title>
      </Head>
      <div className="projects">
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
      </div>
    </>
  );
}
