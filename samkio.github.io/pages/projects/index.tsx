import ContentWrapper from "@/components/ContentWrapper";
import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";

const SpacedList = styled.ul`
  li {
    padding-bottom: 1em;
  }

  a {
    font-weight: bold;
  }
`;

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
        <SpacedList>
          <li>
            <a
              href="https://github.com/samkio/opensearch-natural-language-python-cdk-example"
              target="_blank"
              rel="noreferrer"
            >
              opensearch-natural-language-python-cdk-example
            </a>
            : Demo exploring the use of natural query language translated into
            OpenSearch queries. This is a full Python stack with IaC.
          </li>
          <li>
            <a
              href="https://github.com/samkio/nlq"
              target="_blank"
              rel="noreferrer"
            >
              nlq
            </a>
            ,{" "}
            <a href="https://samkio.com/nlq/" target="_blank" rel="noreferrer">
              nlq-ui
            </a>
            : TypeScript library for natural language queries with demo UI.
          </li>
          <li>
            <a
              href="https://github.com/samkio/nlq-discord-bot"
              target="_blank"
              rel="noreferrer"
            >
              nlq-discord-bot
            </a>
            : Python Discord bot using NLQ to translate chat messages into SQL
            statements.
          </li>
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
            <a href="https://3ga.me/" target="_blank" rel="noreferrer">
              3ga.me
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
        </SpacedList>
        <h2>Gaming</h2>
        <SpacedList>
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
        </SpacedList>
      </ContentWrapper>
    </>
  );
}
