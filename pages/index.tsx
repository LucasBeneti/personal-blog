import type { NextPage } from "next";
import Image from "next/image";

import CustomMenu from "../src/components/CustomMenu";
import { DarkThemeProvider } from "../src/context/DarkTheme";
import HOCPage from "../src/shared/HOCPage";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <DarkThemeProvider>
      <HOCPage pageTitle="Home Page | Lucas Beneti">
        <CustomMenu />
        <h1 className="text-4xl font-nunito font-bold">Personal website</h1>
        <article className="flex flex-col">
          <section className="flex gap-4">
            <Image
              src={"https://avatars.githubusercontent.com/u/17716465?v=4"}
              alt="Github image"
              width={256}
              height={256}
              className="rounded-full"
            />
            <p className="font-andada text-lg  first-letter:text-4xl">
              Hi! My name is Lucas Silva Beneti, and I'm building this website
              to study{" "}
              <a
                href="https://nextjs.org/"
                target={"_blank"}
                className="font-nunito font-bold bg-green-500 text-white hover:underline"
              >
                NextJS
              </a>{" "}
              and it's main features.
            </p>
          </section>
        </article>
      </HOCPage>
    </DarkThemeProvider>
  );
};

export default Home;
