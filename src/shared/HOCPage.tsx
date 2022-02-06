import type { NextPage } from "next";
import Head from "next/head";
import { ReactChild, ReactElement } from "react";
import { DarkThemeProvider, useDarkTheme } from "../context/DarkTheme";

import CustomHead from "../shared/CustomeHead";
interface HOCPageType {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  theme?: string;
  pageTitle?: string;
  customClassName?: string;
}

const HOCPage: NextPage<HOCPageType> = ({
  children,
  theme,
  pageTitle,
  customClassName,
}) => {
  const { dark } = useDarkTheme();
  return (
    <div
      className={`flex flex-col items-center relative ${
        dark ? "dark" : ""
      } ${customClassName}`}
    >
      <CustomHead page="Post" title={pageTitle} />
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};

export default HOCPage;
