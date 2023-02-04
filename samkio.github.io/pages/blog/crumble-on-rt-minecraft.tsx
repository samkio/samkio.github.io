import ContentWrapper from "@/components/ContentWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crumble in Minecraft | Samkio</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper boxed>
        <h1>Crumble in Minecraft</h1>
        <p>Here is our dog Crumble</p>
        <img src="../images/blog/crumble.jpg" />
        <p>
          I had the idea of making a homage to him in RTGames Minecraft world
          server.
        </p>
        <p>
          I am not the best Minecraft builder however so I spent a lot of time
          thinking of how I would represent him in the voxel game.
        </p>
        <p>
          My initial thought was to create a 3D model of him. Pass it through a
          Voxelizer and then build in on the server.
        </p>
        <p>
          That idea was going to fail though. Taking a 3D model of an active
          puppy was near impossible and even then the end result wasn't really
          what I wanted...
        </p>
        <img width={"100%"} src="../images/blog/crumble-model.png" />
        <p>
          As you can see in the above image it is a very big build but the
          colours are off and it's doesn't capture him.
        </p>
        <p>
          <i>
            NOTE: To do this I used
            <a href="https://www.smoothie-3d.com/site/page_index.php">
              Smoothie-3D
            </a>
            to turn a still image into a 3D model of him and
            <a href="https://www.drububu.com/miscellaneous/voxelizer/index.html?out=obj">
              Drububu Voxelizer
            </a>
            to convert it into Minecraft (and then fixed the colours a bit
            myself manually with creative mode and World Edit.)
          </i>
        </p>
        <p>
          Why was I spending time with this convoluted method when I miss the
          point completely. I want to have Crumble on the Minecraft server.
        </p>
        <p>
          <strong>So why don't I JUST DO THAT?</strong>
        </p>
        <p>So I did, I'm not the best builder but I can try...</p>
        <p>
          And in 2 hours work (including writing this). He is now at the North
          Pole on RT Game's Minecraft Server :)
        </p>
        <img width={"100%"} src="../images/blog/crumble-rt-1.png" />
        <img width={"100%"} src="../images/blog/crumble-rt-2.png" />
        <img width={"100%"} src="../images/blog/crumble-rt-3.png" />
      </ContentWrapper>
    </>
  );
}
