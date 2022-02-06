import { GraphQLClient } from "graphql-request";

const data_endpoint = "https://graphql.datocms.com/";
const graphQLClient = new GraphQLClient(data_endpoint, {
  headers: {
    "content-type": "aplication/json",
    authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
  },
});

// const query = `
//   query {
//     _allArticlesMeta {
//       count
//     }
//     allArticles(orderBy: _createdAt_ASC) {
//       slug
//       id
//       author
//       mainTitle
//       mainContent {
//         value
//       }
//       dateCreated
//     }
//   }
// `;

export async function getAllPosts() {
  const query = `
        query {
          allArticles(orderBy: _createdAt_ASC) {
            slug
            id
            author
            mainTitle
            dateCreated
          }
        }
    `;
  const response = await graphQLClient.request(query);
  return response;
}

export async function getFullPost(slug: string) {
  const query = `
        query {
          article(filter: {slug: {eq: "${slug}"}}) {
            id
            author
            mainTitle
            dateCreated
            mainContent {
              value
            }
          }
        }
    `;

  const response = await graphQLClient.request(query);
  return response;
}
