import Image from "next/image";


const healingAreaData = [
  { 
    icon: "/icon/depression.png",
    title: "우울장애",
    description: "울적한 기분, 무력감, 공허함 등 우울감이 지속되는 문제",
  },
  {
    icon: "/icon/gongpo.png",
    title: "공황 및 공포장애",
    description: "과호흡, 질식감, 심장 박동 증가, 떨림, 예기불안 등 지속되는 공황 증상",
  },
  {
    icon: "/icon/clock.png",
    title: "강박장애",              
    description: "끊임없이 침투하는 불안한 강박사고와 불안을 낮추기 위한 강박행동이 지속되는 문제",
  },
  {
    icon: "/icon/arrow.png",
    title: "사회불안장애",
    description: "사회적 상황에서 타인의 부정적인 평가를 두려워하며 생겨나는 과도한 불안이 지속되는 문제",
  },
  {
    icon: "/icon/exclamation.png",
    title: "분노조절장애",
    description: "작은 자극에도 분노감이 치밀어올라 삶에 문제를 지속적으로 만들어내는 문제 ",
  },
  {
    icon: "/icon/mask.png",
    title: "각종 인격장애",
    description: "대부분의 정신건강 장애의 기저에 존재하는 부적응적 스키마로 인한 문제 ",
  },
  {
    icon: "/icon/bubu.png",
    title: "부부 문제",
    description: "부부 관계에서의 끊임없이 부딪히며 지속되는 문제",
  },
  {
    icon: "/icon/son.png",
    title: "자녀 문제",
    description: "자녀의 문제 행동 및 가족 간의 지속적인 갈등으로 인해 생겨나는 문제",
  },
  {
    icon: "/icon/guard.png",
    title: "각종 중독장애",
    description: "술, 게임, 도박 등 현실의 고통감을 잊기 위해 과도하게 하나의 행위에 몰두하며 빠져나오지 못하는 문제",
  },
  {
    icon: "/icon/sad.png",
    title: "외상후 스트레스장애",
    description: "PTSD, 과거 외상 경험을 통해 생겨난 고통감을 반복적으로 재경험하며 느끼는 삶의 문제",
  },
  {
    icon: "/icon/arrowdouble.png",
    title: "비만 문제",
    description: "비만은 식사습관, 운동, 행동 등의 생활습관을 개선하면서 치료할 수 있습니다.",
  },

];

export default function HealingAreaSection() {
  return (
    <section className="flex flex-col items-start md:items-center">
      <div className="flex flex-col gap-10 w-full md:max-w-[960px] xl:max-w-[1120px] px-6 lg:px-0">
        <div className="flex flex-col gap-1">
          <div className="text-13 text-mettaa uppercase">HEALING AREA</div>
          <h3>진료 영역</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:gap-x-20 gap-y-8">
          {healingAreaData.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 px-3 pb-2 min-h-30">
              <div className="flex gap-3 items-center text-lg text-mettaa font-medium">
                <Image src={item.icon} alt={item.title} width={28} height={28} />
                {item.title}
              </div>
              <div className="break-keep">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
