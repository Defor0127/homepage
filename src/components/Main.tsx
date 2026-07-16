import ClinicProcessSection from "./ClinicProcessSection";
import HealingAreaSection from "./HealingAreaSection";
import HealingProgramSection from "./HealingProgramSection";

export default function Main() {
  return (
    <>
    <div className="flex flex-col gap-20">
      <HealingAreaSection />
      <HealingProgramSection />
    </div>
    </>
  );
}
