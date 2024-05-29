import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "BSc. in Computer Science And Engineering",
      institute: "Daffodil International University",
      year: "2017- 2021 ",
    },
    {
      id: 2,
      degree: "Master in Applied Computer Science",
      institute: "Schmalkalden University Of Applied Sciences",
      year: "2022 - current",
    },
  ];
  return (
    <div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
