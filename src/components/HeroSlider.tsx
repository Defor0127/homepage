"use client";

import Image from "next/image";
import { useState } from "react";

const slideIds = ["01", "02", "03"] as const;
const slideCount = slideIds.length;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div className="relative min-h-0 w-full flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / slideCount}%)`,
          }}
        >
          <section
            className="box-border flex h-full shrink-0 flex-col gap-[47px]"
            style={{ width: `${100 / slideCount}%` }}
          >
            {/* <Image
              src="/image/ellipse1.png"
              alt="Ellipse"
              width={1393}
              height={1393}
              top={-585}
              left={-97}
              /> */}

            <div className="relative flex w-full justify-between gap-10 pt-[110px] pl-[434px] pr-[415px]">
              <div className="flex w-full flex-col gap-15 text-right items-end pt-[85px]">
                <div>
                  <Image
                    src="/logo/mettaahanul.png"
                    alt="Mettaa"
                    width={160}
                    height={157}
                  />
                </div>
                <div className="text-[68px] leading-[1.5] text-[#292429] font-light whitespace-nowrap">
                  2026년 9월,
                  <br />{" "}
                  <span className="font-bold">
                    <span className="text-[#00ADEF]">하</span>
                    <span className="text-[#0094DA]">늘</span>
                    <span className="font-normal text-[#292429]">과</span>{" "}
                    <span className="font-bold text-[#90C9B6]">METTAA</span>
                  </span>
                  가 <br />
                  함께합니다.
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/image/mettaa_choi.png"
                  alt="Mettaa"
                  width={500}
                  height={531}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center text-center text-[#5A525B] text-[32px] leading-[1.5]">
              <p>
                메타의원의 역사와 하늘 정신건강의학과 의원의 열정이 만나
                <br />
                대한민국 정신건강을 함께 지켜 나갑니다.
              </p>
            </div>
          </section>

          <section
            className="box-border flex h-full shrink-0 flex-col items-center justify-center gap-8 px-[442px]"
            style={{ width: `${100 / slideCount}%` }}
          >
            <div className="flex justify-center">
              <Image
                src="/logo/Sky Logo.png"
                alt="Sky"
                width={160}
                height={157}
                priority
              />
            </div>
            <div className="text-center font-maruburi text-[40px] font-light leading-[1.5]">
              듣고 싶습니다. <span className="font-bold">당신의 이야기</span>
              <br />
              지키겠습니다. <span className="font-bold">당신의 프라이버시</span>
            </div>
          </section>

          <section
            className="box-border flex h-full shrink-0 flex-col justify-center pl-[630px] pr-[629px]"
            style={{ width: `${100 / slideCount}%` }}
          >
            <div>
              <div>나는 하늘 로고다</div>
              <div>
                <span className="text-[68px] leading-[1.4]">
                  하늘정신건강의학과
                </span>
                <p className="text-[28px] leading-[1.4] uppercase">
                  sky mental health clinic
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="item-center flex w-full justify-center gap-1 border pb-8 text-[13px] font-semibold leading-[1.4]">
        {slideIds.map((id, index) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "opacity-100" : "opacity-40"}
            aria-label={`${id} 페이지로 이동`}
            aria-current={activeIndex === index ? "true" : undefined}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
}
