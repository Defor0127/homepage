"use client";

export type DoctorSheetContent = {
  careers: string[];
};

export type Doctor = {
  src: string;
  alt: string;
  sheet: DoctorSheetContent;
  /** object-cover 기본값 외 개별 크롭/포지션 보정 */
  imageClassName?: string;
};

type DoctorBottomSheetProps = {
  open: boolean;
  doctor: Doctor;
  clinicName: string;
  onClose: () => void;
};

export default function DoctorBottomSheet({
  open,
  doctor,
  onClose,
}: DoctorBottomSheetProps) {
  return (
    <div
      className={`absolute inset-0 z-20 flex flex-col justify-end items-center overflow-hidden rounded-xl bg-[#3F1F42]/80 backdrop-blur-sm shadow-[inset_1px_1px_12px_0px_#00000033] break-keep transition-transform duration-300 ease-out ${
        open
          ? "translate-y-0"
          : "translate-y-[calc(100%+2px)] pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label={`${doctor.alt} 상세 정보`}
      onClick={onClose}
    >
      <div className="w-full min-w-0 px-2 py-4 text-[14px]">
        <ul className="flex flex-col gap-0.5 pl-5 pr-1">
          {doctor.sheet.careers.map((career) => (
            <li
              key={career}
              className="text-white tracking-[-2%] text-sm list-disc list-outside break-keep break-words"
            >
              {career}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
