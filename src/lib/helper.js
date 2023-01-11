const baseUrl = "http://localhost:3000";

// endpoint: http://localhost:3000/api/posts"
export default async function getPost(id) {
  const res = await fetch(`${baseUrl}/api/posts${id ? "/" + id : ""}`);
  const posts = res.json();

  return posts;
}
