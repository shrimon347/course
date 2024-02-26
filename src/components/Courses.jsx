// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Course from "./Course";

const courses = ({handleToSelect,}) => {
  // eslint-disable-next-line no-unused-vars
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:w-2/3 gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center justify-center justify-items-center">
      {courses.map((course) => (
        <Course key={course.id} handleToSelect={handleToSelect}  course={course} />
      ))}
    </div>
  );
};

export default courses;
