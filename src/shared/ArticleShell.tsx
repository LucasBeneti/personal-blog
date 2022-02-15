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
    <article className="lg:w-3/6 md:w-4/6 sm:w-5/6 px-8">
      <h1 className="font-nunito font-bold text-4xl">{title}</h1>
      <section className="font-nunito flex flex-col">
        <p className="font-bold">{author}</p>
        <p className="font-bold">{formatedParsedDate}</p>
      </section>
      {children}
    </article>
  );
};
