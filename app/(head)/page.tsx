import Link from "next/link";
import { FaFire } from "react-icons/fa6";
import ToonsByMenuSlider from "../_components/ToonsByMenuSlider";

interface SectionInterface {
  title: string;
  href: string;
  menu?: string;
  toonMark?: boolean;
}

const Section = ({ title, href, menu, toonMark }: SectionInterface) => {
  return (
    <div className="flex w-full p-2 justify-between items-center">
      <div className="text-start flex items-center">
        <FaFire className="text-lg" color="red" />
        <span className="pl-1">{title}</span>
      </div>
      <Link href={href} className="text-end">
        더보기
      </Link>
      <ToonsByMenuSlider menu={menu} toonMark={toonMark} />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Section title="즐겨찾기" href="/mark" toonMark={true} />
      <Section title="웹툰" href="/webtoon" menu="TOON" />
      <Section title="만화" href="/manhua" menu="MANHUA" />
    </>
  );
}
