import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Freedom | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper boxed>
        <h1>Creative Freedom</h1>
        <p>
          This is my first blog post in my new &quot;creative&quot; website.
        </p>
        <p>
          Originally my site was a free HTML template that I tweaked to fit my
          purpose.
        </p>
        <p>But it had no flair!</p>
        <p>
          I was so caught up in trying to make things perfect that I created a
          boring site and never managed to add anything I want
        </p>
        <p>
          I always thought things had to be 100% perfect, use the latest web
          frameworks, be accessible, have CI/CD pipelines etc.
        </p>
        <p>I lost sight at what the web was for...</p>
        <p>About how I started my journey in the first place...</p>
        <p>So I ripped it all up and started from scratch.</p>
        <p>
          I&apos;m writing the HTML pages directly. I don&apos;t even care about
          styling right now or reducing effort.
        </p>
        <p>
          All I care about is having a place to express myself creatively using
          my passion of software development.
        </p>
        <p>This is what I have...</p>
        <p>
          <b>And it&apos;s liberating. :D</b>
        </p>
      </ContentWrapper>
    </>
  );
}
