import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home – Thomas Kilgour</title>
      </Head>

      <p className="mb-4">Hello!</p>
      <p className="mb-4">
        I'm Thomas, a frontend web developer. I build interactive web
        applications and often use 
        <a href="https://vuejs.org">Vue.js</a> to accomplish the job. I like to
        focus on accessibility and usability, which often means
        <em>less</em> is <strong>more</strong> – so I'll just stop there.
      </p>
    </div>
  );
}
