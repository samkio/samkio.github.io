import ContentWrapper from "@/components/ContentWrapper";
import styled from "@emotion/styled";
import Head from "next/head";

const SpacedList = styled.ul`
  li {
    padding-bottom: 1em;
  }
`;

export default function Books() {
  return (
    <>
      <Head>
        <title>Books | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
      </Head>
      <ContentWrapper>
        <h1>Books</h1>
        <h2>Read Books</h2>
        <p>
          A partial list of books I have read, my favourites annotated with *s.
        </p>
        <SpacedList>
          <li>
            <b>Permutation City</b> - Greg Egan
          </li>
          <li>
            <b>The Phoenix Project</b> - Gene Kim, Kevin Behr and George
            Spafford
          </li>
          <li>
            <b>Culture Series</b> (The Player of Games*, Consider Phlebas, The
            State of the Art) - Iain Banks
          </li>
          <li>
            <b>Superintelligence: Paths, Dangers, Strategies</b> - Nick Bostrom
          </li>
          <li>
            <b>The Art of the Start 2.0*</b> - Guy Kawasaki
          </li>
          <li>
            <b>The Lean Startup*</b> - Eric Ries
          </li>
          <li>
            <b>The 7 Habits of Highly Effective People*</b> - Stephen Covey
          </li>
          <li>
            <b>Dune Series</b> (Dune, Dune Messiah, Children of Dune (partial))
            - Frank Herbert
            <br />
            <i>
              {'> "I did not enjoy this series and gave up on the third book."'}
            </i>
          </li>
          <li>
            <b>Hitchhiker&apos;s Guide to the Galaxy Series</b> (The
            Hitchhiker&apos;s Guide to the Galaxy, The Restaurant at the End of
            the Universe, Life, the Universe and Everything, [So Long, and
            Thanks for All the Fish], Mostly Harmless) - Douglas Adams
            <br />
            <i>
              {
                '> "I would give this a recommendation but the radio series is the best incarnation in my opinion."'
              }
            </i>
          </li>
          <li>
            <b>A Song of Ice and Fire Series</b> (A Game of Thrones, A Clash of
            Kings, A Storm of Swords, A Feast for Crows, A Dance with Dragons) -
            George R. R. Martin
          </li>
          <li>
            <b>Foundation Series*</b> (Prelude to Foundation, Forward the
            Foundation, Foundation, Foundation and Empire, Second Foundation,
            Foundation&apos;s Edge, Foundation and Earth) - Isaac Asimov
          </li>
          <li>
            <b>Robot Series*</b> ([I, Robot], The Caves of Steel, The Naked Sun,
            The Robots of Dawn, Robots and Empire) - Isaac Asimov
          </li>
          <li>
            <b>Galactic Empire Series*</b> (The Stars, Like Dust, The currents
            of Space, Pebble in the Sky) - Isaac Asimov
          </li>
          <li>
            <b>Sapiens, Homo Deus</b> - Yuval Noah Harari
          </li>
          <li>
            <b>
              Digital Fortress, Deception Point, Angels & Demons, The Da Vinci
              Code, The Lost Symbol, Inferno, Origin
            </b>{" "}
            - Dan Brown
          </li>
        </SpacedList>
        <h2>Reading list</h2>
        <p>Books I am currently reading or are next on my list to read.</p>
        <SpacedList>
          <li>Use of Weapons - Iain Banks</li>
          <li>Excession - Iain Banks</li>
          <li>Inversions - Iain Banks</li>
          <li>Look to Windward - Iain Banks</li>
          <li>Matter - Iain Banks</li>
          <li>Surface Detail - Iain Banks</li>
          <li>The Hydrogen Sonata - Iain Banks</li>
          <li>The Making of the Atomic Bomb - Richard Rhodes</li>
          <li>Bobiverse - Dennis E. Taylor</li>
          <li>The Devops Handbook</li>
          <li>Project Hail Mary - Andy Weir</li>
          <li>Children of Time - Adrian Tchaikovsky</li>
          <li>Tomorrow, and Tomorrow, and Tomorrow - Gabrielle Zevin</li>
          <li>Neal Asher Books</li>
          <li>Harry Potter and the Methods of Rationality - Eliezer Yudkowsky</li>
        </SpacedList>
      </ContentWrapper>
    </>
  );
}
