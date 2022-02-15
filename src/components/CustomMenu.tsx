import Link from "next/link";
import MenuSeparator from "../shared/utils/MenuSeparator";

import { useDarkTheme } from "../context/DarkTheme";

const CustomMenu = () => {
  const { dark, setDarkTheme } = useDarkTheme();
  function handleDarkTheme() {
    setDarkTheme(!dark);
    console.log("dark", dark);
  }
  return (
    <nav className="flex items-center justify flex-wrap p-6 mb-6 gap-4 text-base bg-gray-900 dark:bg-gray-200 rounded-b-xl rounded-t-none">
      <Link href={`/`} passHref>
        <a className="font-sans font-bold text-gray-300 dark:text-gray-900 hover:text-white hover::dark:text-white">
          Home
        </a>
      </Link>
      <MenuSeparator color={{ light: "text-teal-200" }} />
      <Link href={`/blog`} passHref>
        <a className="font-sans font-bold text-gray-300 dark:text-gray-900 hover:text-white hover::dark:text-white">
          Blog
        </a>
      </Link>
      <MenuSeparator color={{ light: "text-teal-200" }} />
      <Link href={`/contact`} passHref>
        <a className="font-sans font-bold text-gray-300 dark:text-gray-900 hover:text-white hover::dark:text-white">
          Contact Info
        </a>
      </Link>

      <button
        onClick={handleDarkTheme}
        className="text-gray-900 dark:text-gray-100 absolute top-5 right-5"
      >
        {dark ? "Ligth" : "Dark"} theme
      </button>
    </nav>
  );
};

export default CustomMenu;
