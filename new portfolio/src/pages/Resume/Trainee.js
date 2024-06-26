import React from "react";
import EducationCard from "./EducationCard";

const Trainee = () => {
  const trainee = {
    id:1,
    degree: "Complete Web Development Course",
    institute: "Programming Hero",
    year: "January 2022 - May 2022",
  };
  const trainee1 = {
    id:2,
    degree: "Advanced Diploma in Graphics and Hardware",
    institute: "Youth Training Academy Bangladesh",
    year: "January 2016 - june 2016",
  };
  return (
    <div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          <EducationCard key={trainee.id} education={trainee} />
        </ul>
      </div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          <EducationCard key={trainee1.id} education={trainee1} />
        </ul>
      </div>
    </div>
  );
};

export default Trainee;
