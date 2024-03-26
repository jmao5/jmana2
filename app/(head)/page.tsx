import { getServerToken } from "@/utils/auth";
import ToonsByMenuSlider from "../_components/ToonsByMenuSlider";
import LoginPage from "../(auth)/login/page";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";

export default async function Home() {
  const token = getServerToken();

  return token ? (
    <>
      <div className="flex w-full p-2 justify-between items-center">
        <div className="text-start flex items-center">
          <FaFire className="text-lg" color="red" />
          <span className="">웹툰</span>
        </div>
        <Link href="/webton" className="text-end">
          더보기
        </Link>
      </div>
      <ToonsByMenuSlider menu="TOON" />
      <div className="flex w-full p-2 justify-between items-center">
        <div className="text-start flex items-center">
          <FaFire className="text-lg" color="red" />
          <span className="">만화</span>
        </div>
        <Link href="/manhua" className="text-end">
          더보기
        </Link>
      </div>
      <ToonsByMenuSlider menu="MANHUA" />
    </>
  ) : (
    <LoginPage />
  );
}
