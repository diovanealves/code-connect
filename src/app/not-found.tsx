import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center">
      <Image
        src="/error-500.png"
        width={400}
        height={300}
        className="object-cover"
        alt="Error 500 page not found"
      />

      <h2 className="mt-6 text-xl font-bold leading-relaxed text-[#81FE88]">
        OPS! Página não encontrada.
      </h2>
      <p className="mb-5 mt-2 text-[#BCBCBC]">
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>

      <Link href="/" className="text-[#BFFFC3] underline">
        Voltar ao feed
      </Link>
    </div>
  );
}
