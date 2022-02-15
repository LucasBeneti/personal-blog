import Link from "next/link";
import Image from "next/image";

import BoringAvatar from "../../../public/static/images/boringavatar.svg";

import DefaultCover from "/static/images/default.png";
export const PostCard: React.FC<{
  title: string;
  slug: string;
  author: string;
  coverURL?: string;
  description?: string;
  dateCreated: string;
}> = ({ title, slug, author, coverURL, description, dateCreated }) => {
  const coverImagePath = coverURL ? coverURL : "/static/images/default.png";
  const [year, month, day] = dateCreated.split("-");
  const formatedDate = `${day}/${month}/${year}`;
  return (
    <div className="hover:scale-105 hover:cursor-pointer  duration-300">
      <Link href={`/posts/${slug}`}>
        <div className="w-full lg:max-w-full lg:flex shadow-lg">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${coverImagePath})`,
            }}
          />
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-nunito font-bold text-xl mb-2">
                {title}
              </div>
              <p className="text-gray-700 font-nunito text-base">
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."}
              </p>
            </div>
            <div className="flex">
              <section className="flex gap-2">
                <Image
                  src={BoringAvatar}
                  alt="Boring Avatar"
                  height={48}
                  width={48}
                />
                <div className="text-sm flex flex-col gap-2 self-center font-nunito">
                  <p className="text-gray-900 leading-none">{author}</p>
                  <p className="text-gray-600">{formatedDate}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
