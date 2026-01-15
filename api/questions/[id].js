export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  const {id} = req.query;
  const response = await fetch(
    `https://api.boilerexams.com/questions/${id}`
  );
}
