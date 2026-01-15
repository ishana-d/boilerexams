export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://api.boilerexams.com/question/${id}`
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Upstream API error" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error fetching question" });
  }
}
