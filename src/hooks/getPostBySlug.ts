import { remark } from "remark";
import html from "remark-html";

import { CardPostProps } from "@/components/card-post";

export async function GetPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<CardPostProps> {
  const response = await fetch(`http://localhost:3000/posts?slug=${slug}`);
  if (!response.ok) throw new Error("Erro ao buscar o post");

  const data = await response.json();
  if (data.length === 0) throw new Error("Post não encontrado");

  const post: CardPostProps = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  return {
    ...post,
    markdown: contentHtml,
  };
}
