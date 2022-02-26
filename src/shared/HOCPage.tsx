import type { NextPage } from "next";
import Head from "next/head";
import { ReactChild, ReactElement } from "react";
import { DarkThemeProvider, useDarkTheme } from "../context/DarkTheme";

import PersonalCard from "../components/PersonalCard";

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
    <div className={`${dark && "dark"} ${customClassName} relative`}>
      <div className="flex flex-col items-center relative dark:bg-gray-900 text-gray-900 dark:text-zinc-300 h-fit">
        <CustomHead title={pageTitle} />
        <PersonalCard />
        {children}
      </div>
    </div>
  );
};

export default HOCPage;
