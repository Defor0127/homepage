import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="flex items-center justify-center pt-8">
      <div className="flex flex-col md:flex-row gap-15 md:gap-0 md:max-w-240 xl:max-w-280 break-keep w-full items-between justify-between pb-[90px] md:pb-30">
        <div className="flex flex-col gap-5 w-full max-w-[358px] px-6">
          <div className="flex flex-col gap-2">
            <div className="uppercase text-13 text-hanul-perple">ABOUT US</div>
            <h3>하늘정신건강의학과</h3>
          </div>
          <div className="leading-[1.6] text-[#5A525B]">
            하늘 높이 올라 세상을 내려다보면 <br />
            우릴 힘겹게 했던 수많은 문제들이 참으로 작아보입니다. 내 마음의
            문제도 마찬가지입니다. <br />
            함께 따뜻한 시선으로 들여다 본다면 당신의 세상을 뒤흔들었던
            문제들이 찻잔 속 태풍에 지나지 않는다는 것을, 내가 품을 수 있고,
            사랑할 수 있다는 것을, 그리하여 다시 힘을 내볼 수 있다는 것을 알게
            될 것입니다. <br />
            그 시간을 저희가 함께 하겠습니다. <br />
            참 힘들었을 당신, 이제 혼자가 아닙니다.
          </div>
          <div className="flex items-center w-[82px] h-15 justify-center">
            <div className="w-0.5 h-15 rounded-sm bg-[linear-gradient(180deg,#EFE5DA_0%,#FBBAB0_47.48%,#D398B4_67.56%,#39499A_89.25%,#272C87_100%)]" />
          </div>
          <div className="leading-[1.4] text-[#5A525B]">
            듣고 싶습니다, 당신의 이야기
          </div>
        </div>
        <div>
          <Image
            src="/image/about.png"
            alt="하늘정신건강의학과 소개"
            width={542}
            height={438}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
