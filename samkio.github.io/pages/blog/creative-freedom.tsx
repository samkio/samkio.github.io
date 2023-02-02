import Head from "next/head";

const SITE_TITLE_ASCII = `
                                                                          ▄▄▄███▄
                                                                 ▄   ████████████
                                                          ▄▄▄ ▐███ ▐████▀▀▀  ▐███
                                                 ▄▄▄     ▐███▌▐███ ▐███      ▐███
                                           ▄██▌ ███▌     ▐███▌▐███ ▐███      ▐███
                                ▄▄        ████▌ ███▌     ▐███▌▐███ ▐███      ▐███
                        ▄▄▄█▄ ▐████▌    ▐█████▌ ███▌▄▄▄█████  ▐███ ▐███      ▐███
                 ▄▄██████████▌▐█████▌  ▄██████▌ █████████████▌▐███ ▐███▄▄▄▄██████
       ▄▄▄████▄ █████▀▀▀▀▐███▌▐███████ ███▀███▌ ███▌     ▐███▌▐███ ▐█████████▀▀▀ 
  ▄███████████▌ ███▌     ▐███▌▐███▀▀▀███▌  ███▌ ███▌     ▐███▌▐███   ▀▀▀         
 ████▀▀▀   ▀    ███▄▄▄███████▌▐███   ▀█▀   ███▌ ███▌     ▐██▀  ▀                 
 ████     ▄▄▄▄  ████████▀▀███▌▐███         ███▌ ███▌                             
 █████████████▌ ███▌     ▐███▌▐███         █▀▀                                   
 ██████▀▀▀▀███▌ ███▌     ▐███▌▐███                                               
           ███▌ ███▌      █▀▀                                                    
 ▄▄██▄▄▄██████▀ ███                                                              
 █████████▀▀▀                                                                    
  ▀▀▀                                                                            
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Samkio - Home</title>
        <meta
          name="description"
          content="Samkio's site. A place where I can share my ideas and creativity to the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>
          <pre>{SITE_TITLE_ASCII}</pre>
        </h1>
        <div id="social">
          <a
            title="GitHub"
            href="https://github.com/samkio"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 -0.5 10 10"
              shape-rendering="crispEdges"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#d4d4d4"
                d="M2 0h6M1 1h8M0 2h2M3 2h4M8 2h2M0 3h2M8 3h2M0 4h2M8 4h2M0 5h2M8 5h2M0 6h1M2 6h1M7 6h3M0 7h2M3 7h1M6 7h4M1 8h2M7 8h2M2 9h1M7 9h1"
              />
            </svg>
          </a>{" "}
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/samuelpmartin/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 -0.5 10 10"
              shape-rendering="crispEdges"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#d4d4d4"
                d="M1 0h8M0 1h10M0 2h2M3 2h7M0 3h10M0 4h2M3 4h1M5 4h1M7 4h3M0 5h2M3 5h1M6 5h1M8 5h2M0 6h2M3 6h1M5 6h2M8 6h2M0 7h2M3 7h1M5 7h2M8 7h2M0 8h2M3 8h1M5 8h2M8 8h2M1 9h8"
              />
            </svg>
          </a>
        </div>
        <nav>
          <a href="/">Home</a> ● <a href="blog">Blog</a> ●{" "}
          <a href="about">About</a>
        </nav>
      </header>
      <main>
        <h1>Creative Freedom</h1>
        <p>This is my first blog post in my new "creative" website.</p>
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
          I'm writing the HTML pages directly. I don't even care about styling
          right now or reducing effort.
        </p>
        <p>
          All I care about is having a place to express myself creatively using
          my passion of software development.
        </p>
        <p>This is what I have...</p>
        <marquee>
          <b>And it's liberating. :D</b>
        </marquee>
      </main>
    </>
  );
}
