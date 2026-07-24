import HealingAreaSection from "./HealingAreaSection";
import HealingProgramSection from "./HealingProgramSection";
import ClinicCourseSection from "./ClinicCourseSection";
import DoctorInfoSection from "./DoctorInfoSection";
import BookPhotoSection from "./BookPhotoSection";
import HistorySection from "./HistorySection";
import AboutUsSection from "./AboutUsSection";
import CopyrightSection from "./CopyrightSection";

export default function Main() {
  return (
    <>
      <div className="flex flex-col">
        <AboutUsSection />
        <HistorySection />
        <BookPhotoSection />
        <DoctorInfoSection />
        <ClinicCourseSection />
        <HealingAreaSection />
        <HealingProgramSection />
        <CopyrightSection />
      </div>
    </>
  );
}
