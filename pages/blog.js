import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas Kilgour</title>
        <meta name="description" content="It's me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi</h1>
        <p>My name is Thomas.</p>
      </main>
    </div>
  );
}
