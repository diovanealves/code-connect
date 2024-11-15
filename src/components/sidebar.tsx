import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="h-full w-full max-w-32 rounded-lg bg-sidebar-background px-7 py-8">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo da code connect"
          width={200}
          height={50}
          className="object-cover"
        />
      </Link>
    </aside>
  );
}
