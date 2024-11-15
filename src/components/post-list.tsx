import Link from "next/link";

import { getAllPosts } from "@/hooks/getAllPosts";
import { CardPost, CardPostProps } from "./card-post";

interface PostListProps {
  currentPage: number;
}

export async function PostList({ currentPage }: PostListProps) {
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <>
      {posts.map((post: CardPostProps) => (
        <CardPost key={post.id} {...post} />
      ))}

      {prev && (
        <Link
          href={`/?page=${prev}`}
          className="col-span-2 w-full py-2 text-center text-[#BFFFC3] underline"
        >
          Página anterior
        </Link>
      )}
      {next && (
        <Link
          href={`/?page=${next}`}
          className="col-span-2 w-full py-2 text-center text-[#BFFFC3] underline"
        >
          Proxima página
        </Link>
      )}
    </>
  );
}
