import type { NextPage } from "next";

import CustomMenu from "../src/components/CustomMenu";
import HOCPage from "../src/shared/HOCPage";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <HOCPage pageTitle="Home Page">
      <CustomMenu />
    </HOCPage>
  );
};

export default Home;
