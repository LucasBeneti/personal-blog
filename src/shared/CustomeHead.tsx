import Head from "next/head";

type CustomHeadeType = {
  currentURL?: string;
  page: string;
  title?: string;
  coverImageURL?: string;
  siteName?: string;
  description?: string;
};

const CustomHead: React.FC<CustomHeadeType> = ({
  currentURL,
  page,
  title,
  coverImageURL,
  siteName,
  description,
}) => {
  return (
    <Head>
      <title>{`${page} | ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="title" content={title} key="pagetitle" />
      <meta name="description" content={description} key="description" />
      {currentURL && coverImageURL && siteName && title && description && (
        <>
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={coverImageURL} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={title} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
        </>
      )}
    </Head>
  );
};

export default CustomHead;
