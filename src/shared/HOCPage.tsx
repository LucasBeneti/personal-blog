import type { NextPage } from "next";
import Head from "next/head";
import { ReactChild, ReactElement } from "react";

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
  return (
    <div
      className={`flex flex-col items-center relative ${theme} ${customClassName}`}
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
