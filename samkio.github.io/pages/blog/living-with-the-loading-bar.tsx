import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Living with the loading bar | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper boxed>
        <h1>Living with the loading bar</h1>
        <p>
          Today I was playing around with some Stable Diffusion (more on that in
          a future post!) and I realised how impatient I had become to software
          runs taking time.
        </p>
        <p>
          Doing Stable Diffusion requires a lot of processing power and when you
          can&apos;t scale this without incurring costs (and it being
          unnecessary to scale); then you must wait for the process to complete.
        </p>
        <p>
          Part of the training I was doing took greater than 30 minutes and
          generating images can take a couple of minutes per run. On the grand
          scheme of things this is not a long time but where I am used to near
          instant feedback on computations it made me reflect on my perception
          on this as a whole.
        </p>
        <p>
          In addition, recently we have added a video to one of our products.
          The video takes about 5 seconds to load due to its size. Many of us
          internally noted this delay because of how much it stood out from the
          norm. We are so used to videos loading in seconds. Sites loading in
          milliseconds. We have benchmarks and SEO rankings purely based on page
          load times. It&apos;s so ingrained into our psyche now and it
          wasn&apos;t always this way. When we had dial-up we would have loved 5
          second load times. As technology advances and improves we always
          demand more.
        </p>
        <p>
          As a software engineer I pride myself in ensuring I write efficient
          logic. Can I save a few milliseconds here? How can I make it faster to
          deploy? What can I do to reduce cold start times? I&apos;m always
          trying to find the possible improvements to optimise for this vector
          (amongst others).
        </p>
        <p>
          So naturally when something takes a substantial time it sticks out to
          me like a sore thumb and my mind starts to think on how to optimise
          it?
        </p>
        <p>
          But the thing is. Do I need to? I&apos;m only running the model a
          handful of times and it&apos;s not even that long a duration to wait.
          Sure if this was a production app, used millions of times a day then
          it starts to make sense. But if I spend an hour saving 2 minutes on
          the run time I&apos;ve actually lost time.
        </p>
        <p>
          I think I have a temptation to automate and optimise and I am learning
          to get a balance between action and inaction for these.
        </p>
        <p>
          Sometimes the best thing to do is wait, take a break and learn to live
          with the loading bar.
        </p>
      </ContentWrapper>
    </>
  );
}
