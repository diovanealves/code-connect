import db from "@/utils/prisma";

export async function getAllPosts(_page: number, searchPost: string) {
  try {
    const perPage = 6;

    const totalItems = await db.post.count({
      where: { title: { contains: searchPost, mode: "insensitive" } },
    });

    const totalPages = Math.ceil(totalItems / perPage);

    const prev = _page > 1 ? _page - 1 : null;
    const next = _page < totalPages ? _page + 1 : null;

    const response = await db.post.findMany({
      take: perPage,
      orderBy: { createdAt: "desc" },
      skip: (_page - 1) * perPage,
      include: { author: true },
      where: { title: { contains: searchPost, mode: "insensitive" } },
    });

    return { data: response, prev, next };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}
