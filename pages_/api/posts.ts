import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: "https://kyambalo-blog.herokuapp.com",
    key: "e64dbe539a67c568204584e5ce",
    version: "v3"
});

export async function getPosts() {
    return await api.posts
        .browse({
            include: "tags,authors",
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}
export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            include: "tags,authors",
            slug: postSlug
        })
        .catch(err => {
            console.error(err);
        });
}