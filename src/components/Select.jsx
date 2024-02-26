import React from "react";

const Select = ({ select, idx}) => {
  const { course_title } = select;
  return (
    <div className="mb-2 text-gray-400">
      <p>
        {idx + 1}. {course_title}
      </p>
    </div>
  );
};

export default Select;
