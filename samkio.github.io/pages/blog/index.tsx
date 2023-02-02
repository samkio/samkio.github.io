import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samkio - Blog</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <a href="/">Home</a> ● <a href="blog">Blog</a> ●{" "}
          <a href="about">About</a>
        </nav>
      </header>
      <main>
        <h2>Blog Posts</h2>
        <ul>
          <li>
            <a href="living-with-the-loading-bar.html">
              Living with the loading bar
            </a>
          </li>
          <li>
            <a href="crumble-on-rt-minecraft.html">Crumble in Minecraft</a>
          </li>
          <li>
            <a href="creative-freedom.html">Creative Freedom</a>
          </li>
        </ul>
      </main>
    </>
  );
}
