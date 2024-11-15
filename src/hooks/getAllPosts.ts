export async function getAllPosts(_page: number) {
  const response = await fetch(
    `http://localhost:3000/posts?_page=${_page}&_per_page=6`,
  );
  if (!response.ok) throw new Error("Erro ao  buscar os posts");

  return response.json();
}
