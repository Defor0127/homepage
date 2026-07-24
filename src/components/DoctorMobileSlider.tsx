"use client";

import { useEffect, useRef, useState } from "react";
import DoctorCard from "./DoctorCard";
import type { Doctor } from "./DoctorBottomSheet";

type DoctorMobileSliderProps = {
  doctors: Doctor[];
  clinicName: string;
  /** 지점 변경 시 스크롤을 맨 앞으로 리셋하기 위한 키 */
  resetKey: string;
};

export default function DoctorMobileSlider({
  doctors,
  clinicName,
  resetKey,
}: DoctorMobileSliderProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sliderRef.current?.scrollTo({ left: 0 });
    setSelectedDoctor(null);
  }, [resetKey]);

  return (
    <div
      ref={sliderRef}
      className="flex gap-x-2 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
      role="tabpanel"
      aria-label={clinicName}
    >
      {doctors.map((doctor, index) => (
        <div
          key={doctor.src}
          className="flex w-[min(80%,280px)] min-w-[min(80%,280px)] shrink-0 snap-start"
        >
          <DoctorCard
            doctor={doctor}
            clinicName={clinicName}
            priority={index === 0}
            open={selectedDoctor?.src === doctor.src}
            onOpen={() => setSelectedDoctor(doctor)}
            onClose={() => setSelectedDoctor(null)}
            interaction="button"
          />
        </div>
      ))}
    </div>
  );
}
