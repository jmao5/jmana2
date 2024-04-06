import { getServerToken } from "@/utils/auth";
import { Menu } from "@/constants/menu";
import Section from "./_components/Section";

export default function Home() {
  const token = getServerToken();
  return (
    token && (
      <>
        <Section title="즐겨찾기" href="/mark" toonMark={true} />
        <Section title="웹툰" href="/webtoon" menu={Menu.WEBTOON} />
        <Section title="만화" href="/manhua" menu={Menu.CARTOON} />
      </>
    )
  );
}
