import ToonsByMenuSlider from "@/app/_components/ToonsByMenuSlider";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";

interface SectionInterface {
  title: string;
  href: string;
  menu?: string;
  toonMark?: boolean;
}

export default function Section({
  title,
  href,
  menu,
  toonMark,
}: SectionInterface) {
  return (
    <>
      <div className="flex w-full p-2 justify-between items-center">
        <div className="text-start flex items-center">
          <FaFire className="text-lg" color="red" />
          <span className="pl-1">{title}</span>
        </div>
        <Link href={href} className="text-end">
          더보기
        </Link>
      </div>
      <ToonsByMenuSlider menu={menu} toonMark={toonMark} />
    </>
  );
}
