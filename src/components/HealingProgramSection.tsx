"use client";

import { useState } from "react";
import Image from "next/image";

type SessionCard = {
  label: string;
  session?: string;
  icon?: string;
};

type Program = {
  title: string;
  sessions: SessionCard[];
};

const PROGRAMS: Program[] = [
  {
    title: "우울 치유 프로그램 (총 10회)",
    sessions: [
      { label: "알아보기", session: "1회", icon: "/icon/play.png" },
      { label: "CASH", session: "9회", icon: "/icon/umbrella.png" },
      { label: "(필요 시)", session: "개인상담", icon: "/icon/expression.png" },
    ],
  },
  {
    title: "공황 치유 프로그램 (총 15회)",
    sessions: [
      { label: "알아보기", session: "2회", icon: "/icon/play.png" },
      { label: "CASH", session: "9회", icon: "/icon/umbrella.png" },
      { label: "이완훈련", session: "3회", icon: "/icon/wind.png" },
      { label: "자극감응훈련", session: "1회", icon: "/icon/stimuli.png" },
      { label: "(필요 시)", session: "개인상담", icon: "/icon/expression.png" },
    ],
  },
  {
    title: "사회불안 치유 프로그램 (총 10회)",
    sessions: [
      { label: "알아보기", session: "2회", icon: "/icon/play.png" },
      { label: "CASH", session: "9회", icon: "/icon/umbrella.png" },
      { label: "이완훈련", session: "3회", icon: "/icon/wind.png" },
      { label: "인지수정", session: "1회", icon: "/icon/eye.png" },
      { label: "모의직면", session: "3회", icon: "/icon/box.png" },
      { label: "(필요 시)", session: "개인상담", icon: "/icon/expression.png" },
    ],
  },
  {
    title: "강박 치유 프로그램 (총 10회)",
    sessions: [
      { label: "알아보기", session: "2회", icon: "/icon/play.png" },
      { label: "CASH", session: "9회", icon: "/icon/umbrella.png" },
      { label: "이완훈련", session: "3회", icon: "/icon/wind.png" },
      { label: "(필요 시)", session: "개인상담", icon: "/icon/expression.png" },
    ],
  },
  {
    title: "그룹 스키마 (기본 4회 + 추가)",
    sessions: [
      { label: "Group Schema", session: "4회", icon: "/icon/group.png" },
      { label: "(필요 시)", session: "추가", icon: "/icon/group.png" },
    ],
  },
];

const cardClassName =
  "flex flex-col w-35 h-[110px] rounded-xl px-4 pt-4 bg-white shadow-[1px_2px_4px_0px_#2B5C440A]";

export default function HealingProgramSection() {
  const [openTitles, setOpenTitles] = useState<string[]>([PROGRAMS[0].title]);

  const toggleProgram = (title: string) => {
    setOpenTitles((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="flex flex-col items-center pb-8 px-6 md:px-30 xl:px-100">
      <div className="flex flex-col max-w-[1120px] w-full gap-10">
        <div className="flex flex-col gap-1">
          <div className="text-13 text-mettaa uppercase">
            METTAA Healing Program
          </div>
          <h3>메타 치유 프로그램</h3>
        </div>
        <div className="flex flex-col">
          {PROGRAMS.map(({ title, sessions }) => {
            const isOpen = openTitles.includes(title);
            return (
              <div key={title} className="flex flex-col w-full">
                <button
                  type="button"
                  onClick={() => toggleProgram(title)}
                  className="flex justify-between items-center px-5 py-[13px]"
                >
                  <div className="text-mettaa text-bold">{title}</div>
                  <Image
                    src={isOpen ? "/icon/chevron-up.png" : "/icon/chevron-down.png"}
                    alt="toggle"
                    width={24}
                    height={24}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2 px-5 py-5 border-y border-mettaa bg-[#FAFAFA]">
                      {sessions.slice(0, 6).map((card) => (
                        <div key={card.label} className={cardClassName}>
                          <div className="flex flex-col">
                            <div className="flex flex-col">
                              {card.label}
                              {card.session && (
                                <>
                                  <br />
                                  <span className="text-semibold">{card.session}</span>
                                </>
                              )}
                            </div>
                          </div>
                          {card.icon && (
                            <div className="flex justify-end items-end">
                              <Image
                                src={card.icon}
                                alt="play"
                                width={32}
                                height={32}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
