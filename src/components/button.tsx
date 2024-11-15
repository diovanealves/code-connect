import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="cursor-pointer rounded-lg border-none bg-[#81FE88] px-5 py-2 text-center text-lg font-semibold leading-relaxed text-[#132E35] hover:opacity-60">
      {children}
    </button>
  );
}
