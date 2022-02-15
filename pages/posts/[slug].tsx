import { isHeading, isParagraph } from "datocms-structured-text-utils";
import type { NextPage } from "next";
import { renderNodeRule, StructuredText } from "react-datocms";
import CustomMenu from "../../src/components/CustomMenu";
import { ArticleShell } from "../../src/shared/ArticleShell";
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

  return (
    <HOCPage pageTitle={`Post | ${mainTitle}`} customClassName="relative">
      <CustomMenu />
      <ArticleShell title={mainTitle} author={author} dateCreated={dateCreated}>
        <article className="">
          <StructuredText
            data={mainContent}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const HeadingTag: any = `h${node.level}`;
                return (
                  <HeadingTag key={key} className="font-sans text-2xl mb-2">
                    {children}
                  </HeadingTag>
                );
              }),
              renderNodeRule(isParagraph, ({ node, children, key }) => {
                const Paragraph = `article`;
                return (
                  <Paragraph key={key} className="font-playfair text-lg">
                    {children}
                  </Paragraph>
                );
              }),
            ]}
          />
        </article>
      </ArticleShell>
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
    fallback: false,
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
