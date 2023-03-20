/* eslint-disable react/no-unescaped-entities */
import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The streetlights of software engineering | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper boxed>
        <h1>The streetlights of software engineering</h1>
        <p>I was inspired to write this blog post after a evening stroll.</p>
        <p>
          I tend to take a lot of inspiration and philosophy from non-software
          disciplines such as architecture, civil engineering and other
          engineering disciplines.
        </p>
        <p>
          On my evening walk for some reason I acknowledged the streetlights
          more than I usually would. Many are out and it causes there to be long
          stretches of darkness on the road. As I walked I observed them more
          and noticed that they varied so much. Some made of concrete, some out
          of metal others attached to telegraph poles or trees. Even the lamp
          itself varied in brightness, colour and bulb type.
        </p>
        <p>
          These streetlights have been here for many years and the streets
          themselves have changed over time. The streetlamps being so varied
          made me reflect on how they are maintained and improved. With them
          being so varied they must be maintained individually. Replacing only
          when something needs changing or is broken.
        </p>
        <p>
          I thought of the engineer who would come out to these streetlights and
          repair them. Do they see an streetlight that has been running for many
          years and get an urge to update it? Do they get frustrated about the
          way things were done when it was first installed? Do they grumble and
          complain about how things have improved since then?
        </p>
        <p>
          The same mentality is present in software engineering. Many teams will
          have some form of "Legacy". I always thought of legacy as a positive
          word. "This is the legacy I will leave" e.t.c. In the context of
          software engineering, however, the term 'legacy' is generally seen as
          negative.
        </p>
        <p>
          The reason being is that this legacy code is the streetlights when
          they were first installed. The person who installed them has moved on
          and technology has moved on too. Over years of neglect and
          underresourcing the applications becomes a burden to the team. The
          team now want to get rid of it as fast as they can. Security patches
          and simple bug fixes are painful because there are no tests, no
          documentation and no one knows how it works.
        </p>
        <p>
          What we have to remember is that we are also building this legacy. We
          may not be around in the same role 5-10 years from now when what we
          are working on right now is being neglected.
        </p>
        <p>
          We may like to believe we are using the latest technology and building
          more maintenable applications but regardless it will still be viewed
          as legacy one day. Trends change and things move on.
        </p>
        <p>
          For that reason should we care about the quality of what we build? I
          would say yes but being mindful. Perfection is an unobtaionable goal.
          At the end of the day your software won't live forever. How can you
          build it in a way that is quick and maintainable for the period of
          time your users will use it.
        </p>
        <p>
          Just like the streetlights, what choices will you make to make sure
          the lights stay on before we replace the light completely?
        </p>
      </ContentWrapper>
    </>
  );
}