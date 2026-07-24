export default function HistorySection() {
  return (
    <section className="flex flex-col items-center px-6 pt-10 pb-30 break-keep">
      <div className="flex flex-col gap-10 w-full md:max-w-240 xl:max-w-280">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[37.75px] 2xl:gap-[77.75px]">
          <div className="flex flex-col items-center justify-center gap-5 text-center py-10">
            <div className="text-6xl font-ramaraja text-hanul-perple">2019</div>
            <div>
              <div className="text-lg font-semibold">검증된 시간, 깊어진 신뢰</div>
              <div className="text-[#5A525B]">
                2019년부터 올바른 진료를 향한 변함 없는 진정성으로 여러분의 곁에서
                함께하고 있습니다.
              </div>
            </div>
          </div>
          <div className="w-79 md:h-[145px] md:w-px border border-solid [border-image-source:linear-gradient(90deg,#FFFAF7_0%,#F2B3B0_45.17%,#FFFAF7_97.7%)] md:[border-image-source:linear-gradient(180deg,#FFFAF7_0%,#F2B3B0_45.17%,#FFFAF7_97.7%)] [border-image-slice:1]" />
          <div className="flex flex-col items-center justify-center gap-5 text-center py-10">
            <div className="text-6xl font-ramaraja text-hanul-perple">5</div>
            <div>
              <div className="text-lg font-semibold">
                체계적으로 연결된 진료 인프라
              </div>
              <div className="text-[#5A525B]">
                다섯 곳의 네트워크 의원이 함께 연구하며 깊이 있는 진료를
                제공합니다.
              </div>
            </div>
          </div>
          <div className="w-79 md:h-[145px] md:w-px border border-solid [border-image-source:linear-gradient(90deg,#FFFAF7_0%,#F2B3B0_45.17%,#FFFAF7_97.7%)] md:[border-image-source:linear-gradient(180deg,#FFFAF7_0%,#F2B3B0_45.17%,#FFFAF7_97.7%)] [border-image-slice:1]" />
          <div className="flex flex-col items-center justify-center gap-5 text-center py-10">
            <div className="text-6xl font-ramaraja text-hanul-perple">15</div>
            <div>
              <div className="text-lg font-semibold">진심을 전하는 전문의</div>
              <div className="text-[#5A525B]">
                세분화된 전문 지식을 갖춘 여러 의료진이 하나의 진심으로 소통하며
                회복을 돕습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
