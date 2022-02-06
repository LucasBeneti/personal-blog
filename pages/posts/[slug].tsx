import { isHeading, isParagraph } from "datocms-structured-text-utils";
import type { NextPage } from "next";
import { useState } from "react";
import { renderNodeRule, StructuredText } from "react-datocms";
import CustomMenu from "../../src/components/CustomMenu";
import HOCPage from "../../src/shared/HOCPage";
import { getAllPosts, getFullPost } from "../../src/utils/gettingPosts";

const PostPage: NextPage<{
  post: {
    author: string;
    mainTitle: string;
    dateCreated: string;
    mainContent: any;
  };
}> = ({ post }) => {
  const { author, mainTitle, dateCreated, mainContent } = post;
  const [darkMode, setDarkMode] = useState(false);
  return (
    <HOCPage
      theme={darkMode ? "dark" : "light"}
      pageTitle={mainTitle}
      customClassName="relative"
    >
      <CustomMenu />
      <button onClick={() => setDarkMode(!darkMode)}>
        Dark mode: {darkMode.toString()}
      </button>
      <article className="w-3/6">
        <h1 className="">{mainTitle}</h1>
        <section>
          <p>{author}</p>
          <p>{dateCreated}</p>
        </section>
        <article className="bg-teal-100 dark:bg-teal-900 text-gray-900 dark:text-zinc-300">
          <StructuredText
            data={mainContent}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const HeadingTag: any = `h${node.level}`;

                return (
                  <HeadingTag key={key} className="text-2xl bg-red-400">
                    {children}
                  </HeadingTag>
                );
              }),
              renderNodeRule(isParagraph, ({ node, children, key }) => {
                const Paragraph = `article`;

                return (
                  <Paragraph key={key} className="">
                    {children}
                  </Paragraph>
                );
              }),
            ]}
          />
        </article>
      </article>
    </HOCPage>
  );
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();

  const paths = allPosts.allArticles.map((post: any) => ({
    params: { slug: `${post.slug}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

type Params = {
  params: { slug: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const data = await getFullPost(params.slug);

  return {
    props: {
      post: {
        ...data.article,
      },
    },
  };
};

export default PostPage;
