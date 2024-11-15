"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full flex-col items-center">
      <Image
        src="/error-404.png"
        width={400}
        height={300}
        className="object-cover"
        alt="Error 404"
      />

      <h2 className="mt-6 text-xl font-bold leading-relaxed text-[#81FE88]">
        Opa! Um erro ocorreu.
      </h2>
      <p className="mb-5 mt-2 text-[#BCBCBC]">
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>

      <Link href="/" className="text-[#BFFFC3] underline">
        Voltar ao feed
      </Link>
    </div>
  );
}
