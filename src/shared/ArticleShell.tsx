type ArticleShellType = {
  title: string;
  author: string;
  dateCreated: string;
  children?: React.ReactNode;
};

export const ArticleShell: React.FC<ArticleShellType> = ({
  title,
  author,
  dateCreated,
  children,
}) => {
  const parsedDate = dateCreated.split("-");
  const formatedParsedDate = `${parsedDate[2]}/${parsedDate[1]}/${parsedDate[0]}`;
  return (
    <article className="lg:w-3/6 md:w-4/6 sm:w-5/6 xs:px-16">
      <h1 className="text-4xl bolder">{title}</h1>
      <section className="flex gap-4">
        <p>{author}</p>
        <p>{formatedParsedDate}</p>
      </section>
      {children}
    </article>
  );
};
