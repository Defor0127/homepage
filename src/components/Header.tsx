import Image from "next/image";

const navItems = [
  "ABOUT US",
  "의료진 소개",
  "치료 과정",
  "진료 영역",
  "찾아오시는 길",
] as const;

export default function Header() {
  return (
    <>
      {/* ~1199px — mobile */}
      <header className="flex w-full laptop:hidden" />

      {/* 1200px ~ 1919px — laptop */}
      <header className="hidden w-full laptop:flex desktop:hidden" />

      {/* 1920px~ — desktop */}
      <header className="hidden w-full items-center justify-between px-100 desktop:flex">
        <div className="flex items-center">
          <Image
            src="/logo/SkyLogoSmall.png"
            alt="Sky"
            width={50}
            height={50}
          />
        </div>
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <div
              key={item}
              className="text-[16px] leading-[1.4] text-[#A983AD]"
            >
              {item}
            </div>
          ))}
          <div className="flex items-center">
            <Image
              src="/logo/mettaa_logo_header.png"
              alt="METTAA"
              width={80}
              height={16}
            />
            <Image src="/logo/Frame.png" alt="" width={16} height={16} />
          </div>
          <div>숨겨짐</div>
        </nav>
      </header>
    </>
  );
}
