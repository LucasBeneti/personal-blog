import type { NextPage } from "next";

import CustomMenu from "../src/components/CustomMenu";
import { DarkThemeProvider } from "../src/context/DarkTheme";
import HOCPage from "../src/shared/HOCPage";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <DarkThemeProvider>
      <HOCPage pageTitle="Home Page | Lucas Beneti">
        <CustomMenu />
      </HOCPage>
    </DarkThemeProvider>
  );
};

export default Home;
