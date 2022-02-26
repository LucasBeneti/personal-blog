import React from "react";
import Image from "next/image";
import { useDarkTheme } from "../context/DarkTheme";

const PersonalCard = () => {
  const { dark } = useDarkTheme();
  return (
    <section className="flex flex-col fixed top-64 left-16 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
      <Image
        src={"https://avatars.githubusercontent.com/u/17716465?v=4"}
        alt="Github image"
        width={256}
        height={256}
        className="rounded-full"
      />
      <section className="flex flex-col gap-2 mt-4">
        <p className="text-lg font-bold">Lucas Beneti</p>
        <p className="text-lg font-bold">Frontend engineer</p>
        <p className="text-lg font-bold">lbeneti@gmail.com</p>
        <a href="https://github.com/LucasBeneti" target="__blank">
          <Image
            src={`/static/images/icons/gh-sm-${dark ? "dark" : "light"}.png`}
            height={32}
            width={32}
          />
        </a>
      </section>
    </section>
  );
};

export default PersonalCard;
