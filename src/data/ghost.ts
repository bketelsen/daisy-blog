import GhostContentAPI from "@tryghost/content-api";

// Create an instance of the GhostContentAPI
const api = new GhostContentAPI({
  url: "https://bjkghost.fly.dev",
  key: "79ad8216822e269d3f682f7c8e", // replace this with your API key
  version: "v4",
});
export const getPosts = async () => {
  try {
    return await api.posts.browse({
      limit: "all",
      include: ["tags", "authors"]
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSinglePost = async (slug) => {
  try {
    return await api.posts.read({
      slug,
    }, {
      include: [
        "tags",
        "authors"
      ]
    });
  } catch (error) {
    console.error(error);
  }
};
export const getSinglePage = async (slug) => {
  try {
    return await api.pages.read({
      slug,
    }, {
      include: [
        "tags",
        "authors"
      ]
    });
  } catch (error) {
    console.error(error);
  }
};
