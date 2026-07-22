"use client";

import Image from "next/image";

type CashInfoPopupProps = {
  open: boolean;
  onClose: () => void;
};

type CashModule = {
  english: string;
  korean: string;
  accentClassName: string;
  sessions: string[];
};

const ENGLISH_CLASSNAME = "text-[#8F8F8F] leading-[1.4]";

const CASH_MODULES: CashModule[] = [
  {
    english: "Cognitive Behavior Therapy",
    korean: "인지행동치료",
    accentClassName: "text-[#187451] font-semibold leading-[1.4]",
    sessions: [
      "심리적 고통의 이해 및 인지모델 배우기",
      "자동적사고를 바꾸는 방법",
      "사고기록지 검토 및 피드백",
    ],
  },
  {
    english: "Schema Therapy",
    korean: "스키마 치료",
    accentClassName: "text-[#E7676B] font-semibold leading-[1.4]",
    sessions: [
      "삶의 덫: 스키마 배우기",
      "스키마 모드 배우기",
      "건강한 어른 모드 키우기",
    ],
  },
  {
    english: "Mindfulness Approach",
    korean: "마음챙김에 기반한 접근",
    accentClassName: "text-[#1D4798] font-semibold leading-[1.4]",
    sessions: [
      "마음챙김의 개념 및 호흡 집중 명상",
      "감각 관찰 명상 및 자비 명상",
      "수용전념치료 및 마무리",
    ],
  },
];

export default function CashInfoPopup({ open, onClose }: CashInfoPopupProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cash-info-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="닫기"
        onClick={onClose}
      />
      <div className="flex flex-col relative z-10 w-full max-w-[375px] bg-white rounded-3xl">
        <div className="flex py-3 px-8 gap-1 justify-between bg-[#90C9B6] rounded-t-3xl items-center">
          <div className="flex gap-1 items-center">
            <Image src="/icon/icoon.png" alt="CASH" width={20} height={20} />
            <div className="font-medium text-white">CASH란?</div>
          </div>
          <button type="button" onClick={onClose} aria-label="닫기">
            <Image
              src="/icon/x-close.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>
        </div>
        <div className="flex flex-col gap-3 py-4 px-5">
          <div className="flex flex-col gap-0.5">
            <div className="font-semibold text-primary">CASH Program 9회</div>
            <div>변화와 행동의 자가치유 프로그램</div>
          </div>
          <hr className="border-[#90C9B6]" />
          <div className="flex flex-col gap-5">
            {CASH_MODULES.map((module, moduleIndex) => {
              const sessionOffset = CASH_MODULES.slice(0, moduleIndex).reduce(
                (sum, item) => sum + item.sessions.length,
                0
              );

              return (
                <div key={moduleIndex} className="flex flex-col gap-0.5">
                  <div className={ENGLISH_CLASSNAME}>{module.english}</div>
                  <div className={module.accentClassName}>{module.korean}</div>
                  {module.sessions.map((session, index) => (
                    <div key={index} className="flex gap-2">
                      <div className={module.accentClassName}>
                        {sessionOffset + index + 1}회차
                      </div>
                      <div className="text-[#363436]">{session}</div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
