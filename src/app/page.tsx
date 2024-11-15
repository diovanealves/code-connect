import { PostList } from "@/components/post-list";

export default function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const currentPage = Number(searchParams.page) || 1;
  return (
    <main className="grid h-full grid-cols-2 gap-4 overflow-y-auto">
      <PostList currentPage={currentPage} />
    </main>
  );
}
