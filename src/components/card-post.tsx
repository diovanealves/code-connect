import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./avatar";

export interface CardPostProps {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Author;
}

export interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

export function CardPost(props: CardPostProps) {
  return (
    <Link href={`/posts/${props.slug}`} className="cursor-pointer no-underline">
      <article className="rounded-md bg-card-post-section-background">
        <header className="flex items-center justify-center rounded-t-md bg-gray-500 py-5">
          <figure>
            <Image
              src={props.cover}
              alt="Imagem mostrando o background do Post"
              width={439}
              height={133}
              className="rounded-lg object-cover"
            />
          </figure>
        </header>

        <main className="px-6 py-5">
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
