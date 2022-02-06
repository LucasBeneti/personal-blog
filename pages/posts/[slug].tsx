import { isHeading, isParagraph } from "datocms-structured-text-utils";
import type { NextPage } from "next";
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
  console.log("dateCreated", dateCreated);
  const parsedDate = new Date(dateCreated);
  const formatedParsedDate = `${parsedDate.getDay()}/${parsedDate.getMonth()}/${parsedDate.getFullYear()}`;
  return (
    <HOCPage pageTitle={mainTitle} customClassName="relative">
      <CustomMenu />
      <article className="w-3/6">
        <h1 className="text-4xl bolder">{mainTitle}</h1>
        <section className="flex gap-4">
          <p>{author}</p>
          <p>{formatedParsedDate}</p>
        </section>
        <article className="bg-teal-100 dark:bg-teal-900 text-gray-900 dark:text-zinc-300">
          <StructuredText
            data={mainContent}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const HeadingTag: any = `h${node.level}`;

                return (
                  <HeadingTag key={key} className="text-2xl">
                    {children}
                  </HeadingTag>
                );
              }),
              renderNodeRule(isParagraph, ({ node, children, key }) => {
                const Paragraph = `article`;
                return (
                  <Paragraph key={key} className="py-2">
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
