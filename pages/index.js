import axios from "axios";
import Head from "next/head";
import Link from "next/link";
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
        <title>Mahmoud Kebbeh | NextJS</title>
        <meta name="description" content="Mahmoud Kebbeh | NextJS Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="homepage">
        <div className="header">
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>UX designer &amp; Web Devloper, based in Aleppo.</p>
          <Link href="/projects" className="btn">
            My Portfolio Projects
          </Link>
        </div>
        <Link href="/projects">
          <img src="/banner.png" alt="site banner" />
        </Link>
      </section>
    </>
  );
}
