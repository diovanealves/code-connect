import { remark } from "remark";
import html from "remark-html";

import db from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function GetPostBySlug({ slug }: { slug: string }) {
  try {
    const post = await db.post.findFirst({
      where: { slug },
      include: { author: true },
    });

    const processedContent = await remark().use(html).process(post?.markdown);
    const contentHtml = processedContent.toString();

    return {
      ...post,
      markdown: contentHtml,
    };
  } catch (error) {
    console.error(error);
    redirect("/not-found");
  }
}
