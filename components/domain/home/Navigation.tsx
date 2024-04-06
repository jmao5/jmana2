import { getUserSvInformation } from "@/apis/client/getSvUser";
import { Button } from "@/components/ui/button";
import { getServerToken } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "./_components/SearchIcon";
import UserDropDown from "./_components/UserDropDown";
import { UserResponse } from "@/type/response";

export default async function Navigation({
  userInfo,
}: {
  userInfo?: UserResponse["data"]["basicInfo"];
}) {
  const token = getServerToken();

  return (
    // <header className="bg-zinc-50 flex w-full max-w-screen-sm flex-col px-4">
    <>
      <header className="border-b border-background-darken flex h-16 w-full items-center justify-between space-x-4 bg-background p-3 fixed max-w-screen-sm lg:max-w-screen-lg z-10 top-0">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a href={"/"}>
              <Image
                className="w-12 sm:w-20"
                src="/images/logo.png"
                width={100}
                height={100}
                alt="로고"
              />
            </a>
            {/* <div className="pl-4 space-x-1 hidden sm:flex">
              {LinkLabels.map((button, index) => (
                <Link key={index} href={button.url ?? "#"}>
                  <button className="text-black hover:bg-slate-100 border-none py-1 px-2 rounded-sm">
                    {button.label}
                  </button>
                </Link>
              ))}
            </div> */}
          </div>
          <div className="flex items-center">
            {/* <div className="flex items-center mt-2 md:mt-0 pr-3">
            <Search className="ml-2" />
            <input
              type="text"
              placeholder="제목을 검색해보세요"
              className="placeholder-black placeholder-opacity-75 py-2 pl-2"
            />
          </div> */}
            <SearchIcon />

            {token ? (
              <UserDropDown userInfo={userInfo} />
            ) : (
              <Link href={"/login"}>
                <Button variant="ghost" className="border border-stone-500">
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </header>
      {/* <header className="sm:hidden border-b border-background-darken flex h-12 w-full items-center justify-between space-x-4 bg-background pl-3 fixed max-w-screen-sm z-10 top-14">
        <nav className="sm:hidden flex flex-row items-center justify-center fixed z-10">
          {LinkLabels.map((button, index) => (
            <Link key={index} href={button.url ?? "#"}>
              <button className="text-black hover:bg-slate-100 border-none py-1 px-2 rounded-sm">
                {button.label}
              </button>
            </Link>
          ))}
        </nav>
      </header> */}
    </>
  );
}
