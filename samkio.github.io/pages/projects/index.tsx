import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <h1>Projects</h1>
        <h2>Software & Experiments</h2>
        <ul>
          <li>
            <a
              href="https://www.npmjs.com/package/cdk-output-to-markdown"
              target="_blank"
              rel="noreferrer"
            >
              cdk-output-to-markdown
            </a>
            : Small package to convert CDK output JSON to Markdown.
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/nlq"
              target="_blank"
              rel="noreferrer"
            >
              nlq
            </a>
            : Experimental TypeScript library for natural language queries.
          </li>
          <li>
            <a href="https://3ga.me/" target="_blank" rel="noreferrer">
              3game
            </a>
            : Experimenting with WebRTC to make simple games and applications.
          </li>
          <li>
            <a
              href="https://github.com/samkio/MachineLearningProjects"
              target="_blank"
              rel="noreferrer"
            >
              Machine Learning
            </a>
            : Experimenting with Machine Learning models such as Stable
            Diffusion and Classification.
          </li>
        </ul>
        <h2>Gaming</h2>
        <ul>
          <li>
            <a
              href="https://github.com/samkio/chivalry-juggernaut"
              target="_blank"
              rel="noreferrer"
            >
              Chivalry Juggernaut
            </a>
            : Juggernaut game mode for the Chivalry game.
          </li>
          <li>
            <a
              href="https://www.curseforge.com/minecraft/modpacks/shiver-my-timbers"
              target="_blank"
              rel="noreferrer"
            >
              Shiver My Timbers
            </a>
            : Pirate themed Minecraft modpack.
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/WoopaGaming"
              target="_blank"
              rel="noreferrer"
            >
              WoopaGaming
            </a>
            : YouTube channel primarily focussed on Minecraft plugins and mods.
          </li>
          <li>
            <Link href="projects/gaming">Game Trophy Cabinet</Link>
          </li>
        </ul>
      </ContentWrapper>
    </>
  );
}
