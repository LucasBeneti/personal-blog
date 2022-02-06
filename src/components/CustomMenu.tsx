import Link from "next/link";
import MenuSeparator from "../shared/utils/MenuSeparator";

const CustomMenu = () => {
  return (
    <nav className="flex items-center justify flex-wrap p-6 mb-6 gap-4 text-base bg-gray-900 rounded-b-xl rounded-t-none  ">
      <Link href={`/`} passHref>
        <a className="font-bold  text-gray-300 hover:text-white">Home</a>
      </Link>
      <MenuSeparator color={{ light: "text-teal-200" }} />
      <Link href={`/blog`} passHref>
        <a className="font-bold  text-gray-300 hover:text-white">Blog</a>
      </Link>
      <MenuSeparator color={{ light: "text-teal-200" }} />
      <Link href={`/contact`} passHref>
        <a className="font-bold  text-gray-300 hover:text-white">
          Contact Info
        </a>
      </Link>
    </nav>
  );
};

export default CustomMenu;
