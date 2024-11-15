import { CardPost } from "@/components/card-post";
import { GetPostBySlug } from "@/hooks/getPostBySlug";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await GetPostBySlug({ slug: params.slug });

  return (
    <div>
      <CardPost {...post} />

      <h3 className="mt-6 text-2xl font-semibold leading-relaxed text-[#888]">
        Código:
      </h3>

      <div className="max-h-64 overflow-y-auto rounded-lg bg-[#171D1F] p-4 text-base leading-relaxed text-[#BCBCBC] shadow-md">
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
}
