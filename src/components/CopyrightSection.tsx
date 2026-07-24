import Image from "next/image";

type ClinicInfo = {
  name: string;
  details: string[];
};

const CLINICS: ClinicInfo[] = [
  {
    name: "건대하늘정신건강의학과",
    details: [
      "주 소 : 서울특별시 광진구 아차산로 213, 4층",
      "대 표 : 최명제",
      "전 화 : 02-463-1331",
      "790-91-00834",
    ],
  },
  {
    name: "잠실하늘정신건강의학과",
    details: [
      "주 소 : 서울특별시 송파구 송파대로 558, 201호",
      "대 표 : 박지웅",
      "전 화 : 02-416-1333",
      "팩 스 : 02-416-1332",
      "404-97-04964",
    ],
  },
  {
    name: "강남하늘정신건강의학과",
    details: [
      "주 소 : 서울특별시 강남구 봉은사로 105 동양빌딩 501호",
      "대 표 : 서 한",
      "전 화 : 02-515-1330",
      "597-98-00743",
    ],
  },
  {
    name: "시청하늘정신건강의학과",
    details: [
      "주 소 : 서울특별시 중구 무교로13 휘닉스빌딩 6층",
      "대 표 : 이희건",
      "전 화 : 02-756-6322",
      "248-92-01644",
    ],
  },
  {
    name: "미아하늘정신건강의학과",
    details: [
      "주 소 :",
      "대 표 :",
      "전 화 :",
    ],
  },
];

const BADGES = ["개인정보 처리방침", "비급여 항목"] as const;

export default function CopyrightSection() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#0D0C0CCC] pt-15 pb-25">
      <div className="flex flex-col gap-10 w-full md:max-w-240 xl:max-w-280 px-6 md:px-0">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src="/image/skylogo.png" alt="logo" width={81.5} height={80} />
          <div className="text-hanul-perple text-sm">SKY MENTAL HEALTH</div>
        </div>
        {/* 병원정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-[39px] xl:gap-x-[119px]">
          {CLINICS.map((clinic, index) => (
            <div key={`${clinic.name}-${index}`} className="flex flex-col gap-2">
              <div className="leading-[1.4] text-white">{clinic.name}</div>
              <div className="leading-[1.4] text-sm text-inactive">
                {clinic.details.map((detail, detailIndex) => (
                  <span key={detail}>
                    {detailIndex > 0 && <br />}
                    {detail}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md bg-[#171717] text-inactive text-sm leading-[1.4] px-1.5 py-0.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="uppercase text-hanul-perple text-center">
            copyright 2024 SKY MENTAL HEATH CLINIC all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
