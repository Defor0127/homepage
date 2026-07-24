"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import DoctorMobileSlider from "./DoctorMobileSlider";
import type { Doctor } from "./DoctorBottomSheet";

type Clinic = {
  id: string;
  name: string;
  doctors: Doctor[];
};

const CLINICS: Clinic[] = [
  {
    id: "gundae",
    name: "건대하늘",
    doctors: [
      {
        src: "/image/myeong.png",
        alt: "최명제",
        sheet: {
          careers: [
            "인제대학교상계백병원 정신건강의학과 전공의 수료",
            "의사 국가고시 인제의대 수석",
            "정신건강의학과 전공의수행평가 전국차석",
            "5개대 7개병원 최우수 전공의상 수상(고려대ㆍ경희대ㆍ이화여대ㆍ인제대ㆍ을지대ㆍ서울의료원)",
            "전)국군홍천병원 정신건강의학과 과장",
            "대한신경정신의학과 정회원",
            "정신의학신문 운영진",
            "네이버 건강, 맘키즈 고정 칼럼니스트",
            "나눔정신과 인지행동/스키마치료 전문가 수료",
          ],
        },
      },
      {
        src: "/image/hyeyoung.png",
        alt: "김혜영",
        sheet: {
          careers: [
            "강원대학교병원 정신건강의학과 전공의 수료",
            "고려대학교 의과대학 정신과학 박사과정",
            "전)이지브레인의원 부원장",
            "전)아주편한병원 진료과장",
            "전)더공감정신건강의학과 부원장",
            "대한신경정신의학과 정회원",
            "한국정신분석학회 정신치료전문과정 수료",
            "대한불안의학회 불안장애 심층치료과정 수료",
            "한국수면학회 불면증 인지행동치료과정 수료",
            "치매특별등급 의사소견서 작성교육 수료",
          ],
        },
      },
      {
        src: "/image/hanbin.png",
        alt: "손한빈",
        sheet: {
          careers: [
            "인제대학교상계백병원 정신건강의학과 전공의 수료",
            "인제대학교상계백병원 수련의 수료",
            "대한신경정신의학과 정회원",
            "한국정신신체의학회 연수교육 수료",
            "대한생물정신의학회 연수교육 수료",
          ],
        },
      },
      {
        src: "/image/hyoseong.png",
        alt: "노효성",
        sheet: {
          careers: [
            "정신건강의학과 전문의",
            "인제대학교상계백병원 전공의",
            "전)서울지방병무청 정신건강의학과병역판정 전담의사",
            "전)카프성모병원",
            "대한불안의학회 불안장애 심층치료 과정 수료",
            "한국정신분석학회 심층정신치료 고급과정 수료",
          ],
        },
      },
    ],
  },
  {
    id: "jamsil",
    name: "잠실하늘",
    doctors: [
      {
        src: "/image/jiwoong.png",
        alt: "박지웅",
        sheet: {
          careers: [
            "인제대학교상계백병원 정신건강의학과 전공의",
            "삼성융합의과학원 디지털헬스학과 박사과정",
            "뉴욕 Manhattan Psychiatric Center 연수",
            "삼성서울병원 Digital Health Hackathon 대상",
            "정신건강의학과 전공의 수행평가 전국수석",
            "전)서울지방병무청 신경정신과 병역판정 전담의사",
            "대한신경정신의학회 정회원",
            "나눔정신과 인지행동/스키마치료 전문가 수료",
            "한국정신분석학회 정신치료 전문과정 수료",
            "대한불안의학회 불안장애 심층치료과정 수료",
          ],
        },
      },
      {
        src: "/image/minji.png",
        alt: "김민지",
        sheet: {
          careers: [
            "영남대학교 의료원 정신건강의학과 전공의 수료",
            "영남대학교 의과대학 및 대학원 졸업",
            "전)시온정신건강병원 진료과장",
            "전)칠곡군 청소년통합 지원체계 운영위원 및 학교폭력대책 지역협의회 위원",
            "전)동서울 정신건강의학과 부원장",
            "전)미주병원 진료부장",
            "대한신경정신의학회 정회원",
            "세계정신의학회 CME credit 수료",
            "한국정신분석학회 정신치료 전문과정 수료",
          ],
        },
      },
      {
        src: "/image/sumi.png",
        alt: "류수미",
        sheet: {
          careers: [
            "서울아산병원 정신건강의학과 전공의 수료",
            "서울아산병원 수련의 수료",
            "이화여자대학교 의학전문대학원 졸업",
            "서울아산병원 우수 전공의 표창장",
            "서울아산병원 의무기록 우수상",
            "대한신경정신의학회 정회원",
            "한국정신분석학회 정신치료 단기과정 수료",
          ],
        },
      },
      {
        src: "/image/sinjin.png",
        alt: "신진",
        sheet: {
          careers: [
            "분당서울대학교병원 노인정신의학 전임의 역임",
            "건국대학교병원 정신건강의학과 전공의 수료",
            "고려대학교 의료원 수련의 수료",
            "고려대학교 의과대학 최우등 졸업",
            "대한신경정신의학회 정회원 및 지도전문의",
            "대한노인정신의학회 정회원",
            "전)성북구 치매안심센터 촉탁의",
            "한국정신신체의학회 우수 포스터상",
            "건국대학교병원 우수 의무기록상",
          ],
        },
      },
      {
        src: "/image/young.png",
        alt: "최영희",
        sheet: {
          careers: [
            "메타 연구소 소장",
            "메타 정신건강의학과 의원 원장",
            "메타 아카데미 Traning Supervisor",
            "Beck Institute Training Supervisor",
            "Academy of Cognitive Therapy(ACT)-FEllow 인지행동 치료 전문가",
            "International Society of Schema Therapy-ISST 인증 스키마 치료 전문가",
            "인제의대 서울백병원 정신건강의학과 외래 교수",
            "한국인지행동치료학회 회장 역임",
            "세계 3대 인명사전 마르퀴즈 Who’s Who,IBC, ABI 등재",
          ],
        },
      },
    ],
  },
  {
    id: "gangnam",
    name: "강남하늘",
    doctors: [
      {
        src: "/image/seohan.png",
        alt: "서한",
        sheet: {
          careers: [
            "인제대학교일산백병원 정신건강의학과 전공의 수료",
            "인제대학교 의과대학 졸업",
            "보건복지부 국립공주병원 정신건강의학과 진료과장 역임",
            "보건복지부 정신보건간호사 지도교수 역임",
            "법무부 교정기관 자문전문의 역임",
            "전)강남푸른정신건강의학과 원장",
            "대한신경정신의학회 정회원",
            "대한신경정신의학회 지도전문의",
            "국제EMDR협회 EMDR Institute TrainingCourse 수료",
            "나눔정신과 인지행동/스키마치료 전문가 수료",
            "대한소아청소년정신의학회 성인 ADHD 교육과정 수료",
          ],
        },
      },
      {
        src: "/image/sujin.png",
        alt: "김수진",
        sheet: {
          careers: [
            "인제대학교상계백병원 정신건강의학과 전공의 수료",
            "인제대학교 의과대학 졸업",
            "전)상록의료재단 화정병원 진료과장",
            "대한신경정신의학회 정회원",
            "대한정신건강재단 COGMED training 수료",
            "대한불안의학회 불안장애 심층치료과정 수료",
            "대한소아청소년정신의학회 성인 ADHD교육과정 수료",
          ],
        },
      },
      {
        src: "/image/taehun.png",
        alt: "권태훈",
        sheet: {
          careers: [
            "아주대학교병원 정신건강의학과 전공의",
            "아주대학교 의과대학 졸업",
            "대한신경정신의학회 정회원",
            "국제EMDR협회 Weekend 1, Weekend 2, specialty workshop",
            "대한불안의학회 불안장애 심층치료 수료",
            "대한부부가족치료연구회 강의 과정, 사례 과정",
            "한국정신분석학회 심층정신치료 고급훈련과정",
            "대한소아청소년정신의학회 성인 ADHD 교육과정 수료",
          ],
        },
      },
    ],
  },
  {
    id: "cityhall",
    name: "시청하늘",
    doctors: [
      {
        src: "/image/huigun.png",
        alt: "이희건",
        // 원본이 박스보다 짧아 하단이 텍스트와 겹침 → 배율 유지한 채 위로 이동해 텍스트 영역 위에 둠
        imageClassName: "object-cover -translate-y-[6%]",
        sheet: {
          careers: [
            "인제대학교상계백병원 정신건강의학과 전공의 수료",
            "인제대학교상계백병원 수련의 수료",
            "인제대학교 의과대학 졸업",
            "일본 치바의과대학병원 교환 연수",
            "대한신경정신의학회 정회원",
            "정서인지행동학회 평생 회원",
            "치매특별등급 의사소견서 작성교육 수료",
            "비만 인지행동치료 전문가 워크숍 과정 수료",
            "시청하늘정신건강의학과 대표원장",
            "전)건대하늘정신건강의학과 원장",
          ],
        },
      },
      {
        src: "/image/younna.png",
        alt: "김유나",
        sheet: {
          careers: [
            "서울대학교 의과대학 의학사 졸업",
            "서울대학교병원 수련의 수료",
            "분당서울대학교병원 정신건강의학과전공의 수료",
            "대한신경정신의학회 정회원",
          ],
        },
      },
      {
        src: "/image/jihye.png",
        alt: "한지혜",
        sheet: {
          careers: [
            "조선대학교 의과대학 의학전문대학원 졸업",
            "인제대학교상계백병원 정신건강의학과전공의 수료",
            "전)아람병원 진료과장",
            "전)인천바오로병원 진료과장",
            "대한신경정신의학회 정회원",
          ],
        },
      },
    ],
  },
];

export default function DoctorInfoSection() {
  const [activeClinicId, setActiveClinicId] = useState(CLINICS[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const activeClinic =
    CLINICS.find((clinic) => clinic.id === activeClinicId) ?? CLINICS[0];

  const handleClinicChange = (clinicId: string) => {
    setActiveClinicId(clinicId);
    setSelectedDoctor(null);
  };

  return (
    <section className="flex flex-col items-center px-6 py-30">
      <div className="flex flex-col gap-10 w-full md:max-w-240 xl:max-w-280">
        <div className="flex flex-col gap-1">
          <div className="uppercase text-hanul-perple">
            SKY MENTAL HEALTH Clinic
          </div>
          <h3>의료진 소개</h3>
        </div>
        <div
          className="flex gap-x-[11.75px] md:gap-x-10"
          role="tablist"
          aria-label="지점 선택"
        >
          {CLINICS.map((clinic) => {
            const isActive = clinic.id === activeClinicId;

            return (
              <button
                key={clinic.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleClinicChange(clinic.id)}
                className={`leading-[1.4] transition-colors px-0.5 pt-1 pb-0.5 ${
                  isActive
                    ? "text-hanul-perple font-bold border-b-2 border-hanul-perple"
                    : "text-inactive"
                }`}
              >
                {clinic.name.slice(0, 2)}
                <span className="text-sm font-normal">
                  {clinic.name.slice(2)}
                </span>
              </button>
            );
          })}
        </div>

        <DoctorMobileSlider
          doctors={activeClinic.doctors}
          clinicName={activeClinic.name}
          resetKey={activeClinicId}
        />

        <div
          className="hidden lg:grid lg:grid-cols-[repeat(3,--spacing(70))] lg:justify-between gap-y-10"
          role="tabpanel"
          aria-label={activeClinic.name}
        >
          {activeClinic.doctors.map((doctor, index) => (
            <div key={doctor.src} className="w-70">
              <DoctorCard
                doctor={doctor}
                clinicName={activeClinic.name}
                priority={index === 0}
                open={selectedDoctor?.src === doctor.src}
                onOpen={() => setSelectedDoctor(doctor)}
                onClose={() => setSelectedDoctor(null)}
                interaction="hover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
