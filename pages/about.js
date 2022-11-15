import axios from "axios";
import Head from "next/head";
import Image from "next/image";
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
        <title>Mahmoud Kebbeh | About</title>
        <meta name="description" content="Mahmoud Kebbeh | NextJS Portfolio" />
      </Head>
      <div className="about">
        <div className="about-me">
          <h2>Who am I?</h2>
          <h3>My name is Mahmoud, and I am a tech enthusiast!</h3>
          <p>
            I love working with code and creating websites with the latest
            technologies...
          </p>
          <p>
            I've created this portfolio with NextJS, which is a very powerful
            React framework.
          </p>
          <p>
            NextJS will most likely be the future of frontend web development.
          </p>
          <p>
            Because it's easy to use and understand, it makes creating sites
            such an enjoyable experience!
          </p>
          <p>
            And it also comes packed with a variety of the hottest and most
            trending features, such as:
          </p>
          <ul>
            <li>Hot Code Reloading</li>
            <li>Server-Side Rendering (SSR)</li>
            <li>SEO-optimization support</li>
            <li>Page-based (Automatic) routing</li>
            <li>Dynamic routing</li>
            <li>Enhanced data fetching (Prefetching)</li>
            <li>Enhanced image rendering</li>
            <li>And more...</li>
          </ul>
        </div>
        <div className="me">
          <Image
            src={"/me.jpg"}
            width={150}
            height={150}
            alt={"me"}
            priority={true}
          />
          <div>
            <h2>Design</h2>
            <h3>Develop &amp; Deploy</h3>
            <p>UX designer &amp; Web Devloper, based in Aleppo.</p>
            <Link href="/projects" className="btn">
              My Portfolio Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
