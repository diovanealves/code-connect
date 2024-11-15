import Link from "next/link";

import { getAllPosts } from "@/hooks/getAllPosts";
import { CardPost } from "./card-post";

interface PostListProps {
  currentPage: number;
  searchTerm: string;
}

export async function PostList({ currentPage, searchTerm }: PostListProps) {
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <>
      {posts.map((post) => (
        <CardPost key={post.id} {...post} />
      ))}

      <div className="col-span-2 flex items-center justify-center gap-5">
        {prev && (
          <Link
            href={{ pathname: "/", query: { page: prev, search: searchTerm } }}
            className="col-span-2 w-full py-2 text-center text-[#BFFFC3] underline"
          >
            Página anterior
          </Link>
        )}
        {next && (
          <Link
            href={{ pathname: "/", query: { page: next, search: searchTerm } }}
            className="col-span-2 w-full py-2 text-center text-[#BFFFC3] underline"
          >
            Proxima página
          </Link>
        )}
      </div>
    </>
  );
}
