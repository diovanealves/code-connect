import Button from "./button";

export default function SearchForm() {
  return (
    <form className="mb-3 flex w-full gap-2" action="/">
      <input
        name="search"
        className="grow rounded-md border-none bg-[#171D1F] px-6 py-2 text-xl font-normal leading-relaxed text-[#BCBCBC]"
        placeholder="Digite o que você procura"
      />

      <Button>Buscar</Button>
    </form>
  );
}
