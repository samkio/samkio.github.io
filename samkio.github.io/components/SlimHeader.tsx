import styled from "@emotion/styled";
import Link from "next/link";

const Header = styled.nav`
  width: 100% - 1em;
  height: 2.6em;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  #checkbox_toggle {
    display: none;
  }

  #hamburger {
    display: none;
  }

  @media (max-width: 768px) {
    #hamburger {
      display: block;
      font-size: 2em;
    }

    .menu {
      display: none;
      position: absolute;
      background-color: white;
      top: 5.2em;
      right: 0;
      left: 0;
      bottom: 0;
      height: calc(100vh - 9.2em);
      padding: 2em 0;
      flex-direction: column;
    }

    input[type="checkbox"]:checked ~ .menu {
      display: flex;
    }
  }
`;

const MenuBar = styled.ul`
  height: 100%;
  list-style: none;
`;

const MenuItems = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2em;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  font-family: Comfortaa, sans-serif;
  text-transform: uppercase;
`;

const Title = styled(Link)`
  font-size: 2.6em;
  text-decoration: none;
  font-family: Comfortaa, sans-serif;
  text-transform: uppercase;
`;

export default function SlimHeader() {
  return (
    <Header>
      <Title href="/" title="Home">
        Samkio
      </Title>
      <MenuBar>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" id="hamburger">
          &#9776;
        </label>
        <MenuItems className="menu">
          <li>
            <MenuLink href="/blog" title="Blog">
              Blog
            </MenuLink>
          </li>
          <li>
            <a
              style={{ height: "100%" }}
              title="GitHub"
              href="https://github.com/samkio"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={"3em"}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </MenuItems>
      </MenuBar>
    </Header>
  );
}
