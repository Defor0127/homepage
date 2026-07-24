"use client";

import Image from "next/image";
import DoctorBottomSheet, { type Doctor } from "./DoctorBottomSheet";

type DoctorCardProps = {
  doctor: Doctor;
  clinicName: string;
  priority?: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  /** 데스크톱: 호버로 상세 열기 / 모바일: + 버튼으로 열기 */
  interaction: "hover" | "button";
};

export default function DoctorCard({
  doctor,
  clinicName,
  priority = false,
  open,
  onOpen,
  onClose,
  interaction,
}: DoctorCardProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => {
        if (interaction === "hover") onOpen();
      }}
      onMouseLeave={() => {
        if (interaction === "hover") onClose();
      }}
    >
      <div className="flex w-full flex-col text-left">
        <div className="relative aspect-[280/322] w-full overflow-hidden">
          <Image
            src={doctor.src}
            alt={doctor.alt}
            fill
            sizes="280px"
            className={doctor.imageClassName ?? "object-cover"}
            priority={priority}
          />
        </div>
        <div className="relative z-10 flex w-full items-end justify-between gap-3 p-5 -mt-13">
          <div className="flex flex-col border-l-2 border-hanul-perple px-3 gap-1">
            <div className="text-hanul-dark text-13">
              {clinicName}정신건강의학과
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm leading-[1.4]">전문의</span>
              <span className="text-xl font-semibold leading-6">
                {doctor.alt}
              </span>
            </div>
          </div>
          {interaction === "button" && (
            <button
              type="button"
              className="shrink-0 text-sm text-hanul-dark hover:cursor-pointer"
              onClick={onOpen}
            >
              <Image
                src="/icon/puppleplus.png"
                alt="자세히"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
      </div>

      <DoctorBottomSheet
        open={open}
        doctor={doctor}
        clinicName={clinicName}
        onClose={onClose}
      />
    </div>
  );
}
