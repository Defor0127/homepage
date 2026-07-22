import HealingAreaSection from "./HealingAreaSection";
import HealingProgramSection from "./HealingProgramSection";
import ClinicCourseSection from "./ClinicCourseSection";
import DoctorInfoSection from "./DoctorInfoSection";

export default function Main() {
  return (
    <>
      <div className="flex flex-col gap-30">
        <DoctorInfoSection />
        <ClinicCourseSection />
        <div className="flex flex-col gap-20">
          <HealingAreaSection />
          <HealingProgramSection />
        </div>
      </div>
    </>
  );
}
