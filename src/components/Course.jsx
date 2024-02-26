// eslint-disable-next-line no-unused-vars
import React from "react";

const course = ({ course, handleToSelect, }) => {
  const { course_title, course_details, price, credit_in_hour, image } = course;
  return (
    <div
      className="flex flex-col gap-5 bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
      href="#"
    >
      <div className="m-auto">
        <img className="mt-3" src={image} alt={course_title} />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-center text-gray-800">
          {course_title}
        </h3>
        <p className="mt-1 text-gray-500 text-center">{course_details}</p>
      </div>
      <div className="flex justify-between">
        <div className="p-2 mx-5">
          <span>$ Price : {price}</span>
        </div>
        <div className="p-2 mx-5">
          <span>Credit : {credit_in_hour} hr</span>
        </div>
      </div>
      <div className="m-auto p-5">
        <button
          type="button"
          onClick={() => handleToSelect(course, credit_in_hour, price)}
          className="w-[280px] p-3 items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Selectd
        </button>
      </div>
    </div>
  );
};

export default course;
