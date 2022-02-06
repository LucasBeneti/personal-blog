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
      mainContent: any; // deve ter um jeito melhor de tipar isso
      dateCreated: string;
    }
  ];
};

const Blog: NextPage<BlogInformation> = ({ ...props }) => {
  return (
    <HOCPage>
      <CustomMenu />
      <section className="flex-col h-100 content-center p-10 container">
        <h1 className="font-bold text-3xl">Posts criados</h1>
        {props.allArticles?.map((article) => (
          <PostCard
            title={article.mainTitle}
            slug={article.slug}
            author={article.author}
            dateCreated={article.dateCreated}
          />
        ))}
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
