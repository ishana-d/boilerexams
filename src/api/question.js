export const QUESTION_IDS = [
  "d44531f1-3cf7-404d-bd10-e9a786484b8a",
  "4f041e07-ef31-44b1-944a-8b2dad3ca3de",
  "f075fec6-61a7-41e1-9ff3-0c8f224d2413",
  "2e0e796b-8e16-41af-9f7d-634561e99248",
  "d9d65ab8-afd4-4620-a441-a7d704fb8453",
];

export async function fetchQuestion(id) {
  const res = await fetch(`/api/questions/${id}`);

  if (!res.ok) {
    throw new Error("not fetching question");
  }

  return res.json();
}
