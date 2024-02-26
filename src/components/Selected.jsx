// eslint-disable-next-line no-unused-vars
import React from "react";
import Select from "./Select";
import { ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Selected = ({ selects, credit, remaning, price }) => {
  console.log(remaning);
  return (
    <div className="sm:w-3/3 md:1/3 lg:w-1/3">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="mb-5 text-3xl text-center font-bold text-gray-800 dark:text-white">
          Credit Hour Remaining {remaning} hr
        </div>
        <hr className="border-b-2 border-slate-300 w-full " />
        <p className="mt-5 mb-2  font-medium uppercase text-xl text-gray-500 dark:text-gray-500">
          Course Name :
        </p>
        {
          // eslint-disable-next-line react/prop-types
          selects.map((select, idx) => (
            <Select key={idx} select={select} idx={idx} />
          ))
        }
        <hr className="border-b-2 border-slate-300 w-full " />
        <div className="mt-5 mb-10  text-gray-500 text-xl dark:text-gray-400">
          Total Credit Hour : {credit > 20 ? credit : credit}
        </div>
        <hr className="border-b-2 border-slate-300 w-full " />
        <p className="mt-5 mb-10  text-gray-500 text-xl dark:text-gray-400">
          Total Price : {price.toFixed(2)} USD
        </p>
      </div>
    </div>
  );
};

export default Selected;
