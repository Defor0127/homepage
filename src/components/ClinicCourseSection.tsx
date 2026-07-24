import { Fragment } from "react";

const STEPS = [
  {
    title: "예약 및 접수",
    description: "네이버 예약, 마인드차트, 전화를 통해 예약 후 내원합니다.",
  },
  {
    title: "사전 평가",
    description: "보다 정확한 진료를 위해 사전 질문지를 작성합니다.",
  },
  {
    title: "치료 계획 수립",
    description: "진료와 사례관리를 통해 하늘만의 맞춤 치료 계획을 수립합니다.",
  },
] as const;

export default function ClinicCourseSection() {
  return (
    <section className="flex flex-col items-start md:items-center py-25 bg-[url('/image/clinic_course_bg.png')] bg-[linear-gradient(259.49deg,rgba(251,187,177,0.6)_10.86%,#8570A7_83.17%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] bg-no-repeat bg-cover bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 w-full md:max-w-240 xl:max-w-280 px-6 lg:px-0">
        <div className="flex flex-col items-start gap-1">
          <div className="text-hanul-pink text-13 leading-[1.4]">
            SKY MENTAL HEALTH CLINIC
          </div>
          <h3 className="text-white">치료 과정</h3>
        </div>
        <div className="flex flex-col gap-8">
          {STEPS.map((step, index) => (
            <Fragment key={step.title}>
              <div className="gap-3 flex flex-col">
                <div className="flex flex-col gap-0.5">
                  <div className="text-hanul-pink leading-[1.4]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-medium leading-[1.4] text-white">
                    {step.title}
                  </div>
                </div>
                <div className="text-white/80 text-sm leading-[1.4] md:text-base">{step.description}</div>
              </div>
              {index < STEPS.length - 1 && <hr className="border-white/20" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
