import Link from "next/link";
import Image from "next/image";

export const PostCard: React.FC<{
  title: string;
  slug: string;
  author: string;
  coverURL?: string;
  dateCreated: string;
}> = ({ title, slug, author, coverURL, dateCreated }) => {
  return (
    <div>
      <section className="relative">
        {coverURL ? (
          <Image src={coverURL} />
        ) : (
          <span style={{ backgroundColor: "#333" }}></span>
        )}
        <h2 className="absolute bottom-10 left-10">{title}</h2>
      </section>
      <section>
        <span>{author}</span>
        <span>{dateCreated}</span>
        <Link href={`/posts/${slug}`}>
          <a>Read</a>
        </Link>
      </section>
    </div>
  );
};
