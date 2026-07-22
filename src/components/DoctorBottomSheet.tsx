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
  clinicName,
  onClose,
}: DoctorBottomSheetProps) {
  return (
    <div
      className={`rounded-xl absolute inset-0 z-20 flex flex-col bg-white/80 backdrop-blur-[2px] transition-transform duration-300 ease-out ${
        open ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label={`${doctor.alt} 상세 정보`}
    >
      {/* 바텀시트 디자인 영역 */}
      <div className="flex h-full flex-col bg-[#3F1F42CC]/80 rounded-xl">
        <div className="flex overflow-y-auto px-2 py-5">
          <ul className="flex flex-col align-center">
            {doctor.sheet.careers.map((career) => (
              <li className="text-sm text-white tracking-[-2%] font-medium" key={career}>
                - {career}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
