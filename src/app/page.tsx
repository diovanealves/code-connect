import { CardPost } from "@/components/card-post";
import { getAllPosts } from "@/hooks/getAllPosts";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number; search: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const searchTerm = searchParams?.search || "";

  console.log(searchParams);

  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className="grid grid-cols-2 gap-4 overflow-y-auto">
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
    </main>
  );
}
