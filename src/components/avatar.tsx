import Image from "next/image";

interface AvatarProps {
  name: string;
  imageSource: string;
}

export function Avatar({ name, imageSource }: AvatarProps) {
  return (
    <ul className="mt-3 flex w-full flex-1 flex-row items-center justify-end gap-2">
      <li>
        <Image
          src={imageSource}
          alt={`Avatar do(a) ${name}`}
          height={32}
          width={32}
          className="rounded-full object-cover"
        />
      </li>
      <li className="text-base font-semibold leading-relaxed text-card-post-section-foreground">
        @{name}
      </li>
    </ul>
  );
}
