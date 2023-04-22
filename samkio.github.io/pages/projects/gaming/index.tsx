import ContentWrapper from "@/components/ContentWrapper";
import styled from "@emotion/styled";
import Head from "next/head";

const Trophy = (props: { title: string; image: string }) => (
  <div title={props.title} style={{ cursor: "pointer" }}>
    <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <clipPath id="icon">
          <circle cx="300" cy="170" r="120" />
        </clipPath>
      </defs>

      <circle cx="300" cy="170" r="130" fill="currentColor" />
      <g clipPath="url(#icon)">
        <image href={props.image} height="260" width="260" x="170" y="40" />
      </g>

      <path
        d="M 170 120 C 120 330 340 270 290 460 L 300 510 L 300 550 L 240 550 C 320 310 50 340 170 120 z"
        strokeWidth="10"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 430 120 C 480 330 260 270 310 460 L 300 510 L 300 550 L 360 550 C 280 310 550 340 430 120 z"
        strokeWidth="10"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      ></path>
      <path
        d="M 110 310 Q 260 340 250 550 L 220 550 Q 220 410 110 310 Z"
        strokeWidth="10"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M 492 310 Q 342 340 352 550 L 382 550 Q 382 410 492 310 Z"
        strokeWidth="10"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M 400 530 L 410 570 Q 300 590 190 570 L 200 530 Z"
        strokeWidth="10"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const TrophyCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default function Projects() {
  return (
    <>
      <Head>
        <title>Game Trophy Cabinet | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <h1>Game Trophy Cabinet</h1>
        <p>Platinum trophy or one hundred percent games.</p>
        <TrophyCase>
          <Trophy title="Halo 3" image={"/images/trophy-icons/halo3.jpg"} />
          <Trophy
            title="Assassin's Creed® II"
            image={"/images/trophy-icons/assassins-creed-ii.png"}
          />
          <Trophy
            title="Assassin's Creed® Brotherhood"
            image={"/images/trophy-icons/assassins-creed-brotherhood.png"}
          />
          <Trophy
            title="Assassin's Creed® Revelations"
            image={"/images/trophy-icons/assassins-creed-revelations.png"}
          />
          <Trophy
            title="Assassin's Creed® III"
            image={"/images/trophy-icons/assassins-creed-iii.png"}
          />
          <Trophy
            title="Assassin's Creed® IV"
            image={"/images/trophy-icons/assassins-creed-iv.png"}
          />
          <Trophy
            title="Assassin's Creed® Unity"
            image={"/images/trophy-icons/assassins-creed-unity.png"}
          />
          <Trophy
            title="Assassin's Creed® Rogue"
            image={"/images/trophy-icons/assassins-creed-rogue.png"}
          />
          <Trophy
            title="Assassin's Creed® Syndicate"
            image={"/images/trophy-icons/assassins-creed-syndicate.png"}
          />
          <Trophy
            title="Assassin's Creed® Origins"
            image={"/images/trophy-icons/assassins-creed-origins.png"}
          />

          <Trophy
            title="inFAMOUS"
            image={"/images/trophy-icons/infamous.png"}
          />
          <Trophy
            title="inFAMOUS 2"
            image={"/images/trophy-icons/infamous-2.png"}
          />
          <Trophy
            title="inFAMOUS Second Son™"
            image={"/images/trophy-icons/infamous-second-son.png"}
          />

          <Trophy
            title="Fallout 3"
            image={"/images/trophy-icons/fallout-3.png"}
          />
          <Trophy
            title="Fallout: New Vegas"
            image={"/images/trophy-icons/fallout-new-vegas.png"}
          />
          <Trophy title="Skyrim" image={"/images/trophy-icons/skyrim.png"} />

          <Trophy
            title="LittleBigPlanet™"
            image={"/images/trophy-icons/lbp.png"}
          />
          <Trophy
            title="LittleBigPlanet™2"
            image={"/images/trophy-icons/lbp-2.png"}
          />
          <Trophy
            title="LittleBigPlanet™3"
            image={"/images/trophy-icons/lbp-3.png"}
          />
          <Trophy
            title="The Last of Us™"
            image={"/images/trophy-icons/the-last-of-us.png"}
          />
          <Trophy
            title="Tomb Raider Underworld"
            image={"/images/trophy-icons/tomb-raider-underworld.png"}
          />
          <Trophy
            title="Watch Dogs"
            image={"/images/trophy-icons/watch-dogs.png"}
          />

          <Trophy
            title="Uncharted"
            image={"/images/trophy-icons/uncharted.png"}
          />
          <Trophy
            title="Uncharted 2"
            image={"/images/trophy-icons/uncharted-2.png"}
          />
          <Trophy
            title="Uncharted 3"
            image={"/images/trophy-icons/uncharted-3.png"}
          />
          <Trophy
            title="Uncharted 4: A Thief's End™"
            image={"/images/trophy-icons/uncharted-4.png"}
          />
          <Trophy
            title="Uncharted: The Lost Legacy™"
            image={"/images/trophy-icons/uncharted-lost-legacy.png"}
          />

          <Trophy
            title="Call of Duty®: World at War"
            image={"/images/trophy-icons/cod-waw.png"}
          />
          <Trophy
            title="Call of Duty® Modern Warfare® 2 (PC and PS)"
            image={"/images/trophy-icons/cod-mw2.png"}
          />
          <Trophy
            title="Call of Duty®: Black Ops"
            image={"/images/trophy-icons/cod-bo.png"}
          />
          <Trophy
            title="Call of Duty® Modern Warfare® 3"
            image={"/images/trophy-icons/cod-mw3.png"}
          />

          <Trophy
            title="Spyro the Dragon"
            image={"/images/trophy-icons/spyro-1.png"}
          />
          <Trophy
            title="Spyro 2: Ripto's Rage!"
            image={"/images/trophy-icons/spyro-2.png"}
          />
          <Trophy
            title="Spyro 3: Year of the Dragon"
            image={"/images/trophy-icons/spyro-3.png"}
          />

          <Trophy
            title="Rayman® Legends"
            image={"/images/trophy-icons/rayman-legends.png"}
          />

          <Trophy
            title="Subnautica"
            image={"/images/trophy-icons/subnautica.png"}
          />

          <Trophy
            title="Middle-earth: Shadow of Mordor"
            image={"/images/trophy-icons/som.png"}
          />

          <Trophy
            title="Marvel's Spider-Man"
            image={"/images/trophy-icons/marvel-spider-man.png"}
          />
          <Trophy
            title="Alien: Isolation"
            image={"/images/trophy-icons/alien-isolation.png"}
          />

          <Trophy
            title="Crash Bandicoot"
            image={"/images/trophy-icons/crash-1.png"}
          />
          <Trophy
            title="Crash Bandicoot 2: Cortex Strikes"
            image={"/images/trophy-icons/crash-2.png"}
          />
          <Trophy
            title="Crash Bandicoot: Warped"
            image={"/images/trophy-icons/crash-3.png"}
          />

          <Trophy title="Portal" image={"/images/trophy-icons/portal.jpeg"} />
          <Trophy
            title="Waking Mars"
            image={"/images/trophy-icons/waking-mars.jpg"}
          />
          <Trophy
            title="To the Moon"
            image={"/images/trophy-icons/to-the-moon.jpg"}
          />
        </TrophyCase>
      </ContentWrapper>
    </>
  );
}
