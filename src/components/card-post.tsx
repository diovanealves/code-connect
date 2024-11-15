import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./avatar";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: {
    author: true;
  };
}>;

export function CardPost(props: PostWithAuthor) {
  return (
    <Link href={`/posts/${props.slug}`} className="cursor-pointer no-underline">
      <article className="rounded-md bg-card-post-section-background">
        <header className="flex items-center justify-center rounded-t-md bg-gray-500 py-3">
          <figure>
            <Image
              src={props.cover}
              alt="Imagem mostrando o background do Post"
              width={400}
              height={100}
              className="h-full rounded-lg object-cover"
            />
          </figure>
        </header>

        <main className="px-6 py-4">
          <section>
            <h2 className="text-xl font-semibold leading-relaxed">
              {props.title}
            </h2>
            <p className="mt-2 grow text-base font-normal leading-relaxed">
              {props.body}
            </p>
          </section>

          <footer>
            <Avatar
              imageSource={props.author.avatar}
              name={props.author.username}
            />
          </footer>
        </main>
      </article>
    </Link>
  );
}
