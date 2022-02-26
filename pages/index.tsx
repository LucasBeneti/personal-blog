import type { NextPage } from "next";
import Image from "next/image";

import CustomMenu from "../src/components/CustomMenu";
import { DarkThemeProvider } from "../src/context/DarkTheme";
import HOCPage from "../src/shared/HOCPage";
import PersonalCard from "../src/components/PersonalCard";

const Home: NextPage = () => {
  return (
    <DarkThemeProvider>
      <HOCPage pageTitle="Home Page | Lucas Beneti">
        <CustomMenu />
        <div className="flex flex-col max-w-4xl">
          <h1 className="text-4xl font-nunito font-bold self-center">
            Personal website
          </h1>
          <article className="flex flex-col ">
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
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
            <p>
              Nam felis risus, tincidunt id tempus at, pharetra vestibulum
              tortor. Nunc vitae tortor lorem. Vivamus sit amet vehicula diam.
              Maecenas leo nisi, iaculis sit amet aliquam nec, porta id ante.
              Donec et mattis erat, cursus lobortis velit. Donec erat sem,
              hendrerit quis condimentum non, pellentesque in nisi. Suspendisse
              eros erat, congue non porta sagittis, suscipit at massa. Aliquam
              quis urna malesuada, scelerisque nulla id, volutpat leo.
              Vestibulum feugiat gravida efficitur. Praesent volutpat ut lorem
              ac suscipit. Cras non orci non risus fringilla condimentum. Sed ac
              nunc in libero faucibus pulvinar vel in lacus. Suspendisse
              condimentum sed ante vel elementum. Phasellus rutrum, lacus in
              porta iaculis, justo risus rhoncus sapien, dapibus pellentesque
              justo odio vitae massa. Mauris vehicula leo tristique, porta
              sapien eu, molestie lectus. Duis orci leo, tincidunt eget rutrum
              at, aliquet in erat.
            </p>
          </article>
        </div>
      </HOCPage>
    </DarkThemeProvider>
  );
};

export default Home;
