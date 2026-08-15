const API_URL = process.env.WORDPRESS_API_URL;

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress posts");
  }

  return res.json();
}