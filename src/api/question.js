export const QUESTION_IDS = [
  "d44531f1-3cf7-404d-bd10-e9a786484b8a",
  "4f041e07-ef31-44b1-944a-8b2dad3ca3de",
  "6f672ca1-84bd-4355-8b9e-9625fda6c77a",
  "2e0e796b-8e16-41af-9f7d-634561e99248",
  "e897c130-d534-4836-9ec4-39e4bcb0006e",
];

export async function fetchQuestion(id) {
  const res = await fetch(`/api/questions/${id}`);

  if (!res.ok) {
    throw new Error("not fetching question");
  }

  return res.json();
}
