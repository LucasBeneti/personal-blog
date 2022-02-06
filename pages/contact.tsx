import type { NextPage } from "next";
import CustomMenu from "../src/components/CustomMenu";
import HOCPage from "../src/shared/HOCPage";

const Contact: NextPage = () => {
  return (
    <HOCPage>
      <CustomMenu />
      <h1 className="text-3xl text-slate-900 dark:text-slate-100">
        Página para contato:
      </h1>
      <p className="text-lg text-gray-900 dark:text-gray-200">
        Aqui você encontra algumas das formas de entrar em contato comigo:
      </p>
      <ul>
        <li>laskjdal</li>
        <li>laskjdalsk</li>
        <li>alskdja</li>
        <li>alskdja</li>
      </ul>
    </HOCPage>
  );
};

export default Contact;
