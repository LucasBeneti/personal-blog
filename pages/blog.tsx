import type { NextPage } from "next";
import { PostCard } from "../src/components/blog-posts/PostCards";
import CustomMenu from "../src/components/CustomMenu";
import HOCPage from "../src/shared/HOCPage";
import { getAllPosts } from "../src/utils/gettingPosts";

type BlogInformation = {
  _allArticlesMeta: { count: Number };
  allArticles?: [
    {
      slug: string;
      id: string;
      author: string;
      mainTitle: string;
      mainContent: any; // tem que ter um jeito melhor de tipar isso
      dateCreated: string;
    }
  ];
};

const Blog: NextPage<BlogInformation> = ({ ...props }) => {
  return (
    <HOCPage pageTitle={`Blog | Lucas Beneti`}>
      <CustomMenu />
      <section className="flex flex-col p-4">
        <h1 className="font-nunito font-bold text-4xl">Posts criados</h1>
        <div className="grid grid-flow-col gap-4 px-10 py-2">
          {props.allArticles?.map((article) => (
            <PostCard
              title={article.mainTitle}
              slug={article.slug}
              author={article.author}
              dateCreated={article.dateCreated}
            />
          ))}
        </div>
      </section>
    </HOCPage>
  );
};

export default Blog;

export async function getStaticProps() {
  const articles = await getAllPosts();
  console.log("articles", articles);
  return {
    props: articles,
  };
}
