export default async function handler(req, res) {
  try {
    const baseUrl = process.env.WORDPRESS_API_URL;

    const response = await fetch(
      `${baseUrl}/property?_embed&per_page=100`
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch properties from WordPress",
      });
    }

    const properties = await response.json();

    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
