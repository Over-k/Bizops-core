import React from "react"; 
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from "@heroicons/react/24/solid";
export function StatisticsCard({ icon, title, value, percentage }) {


  return (


<div className="w-full">
  <div className="flex flex-col px-6 py-5 overflow-hidden dark:bg-gradient-to-br text-[#192a45] dark:text-gray-200 dark:from-[#151f32] dark:to-[#192a45] bg-white rounded-xl shadow-lg duration-300 group">
  <div className="flex flex-row justify-between items-center">
      <div className="px-4 py-4 bg-[#192a45]  rounded-xl ">
      {icon}
      </div>
      <div className="inline-flex text-sm group-hover:text-gray-200 sm:text-base">
              {percentage > 0
                ? React.createElement(ArrowTrendingUpIcon, {
                    className: "p-1 w-6 h-6 text-green-500",
                })
                : React.createElement(ArrowTrendingDownIcon, {
              className: "p-1 w-6 h-6 text-red-500",
                })
              }
              <div className="font-normal text-blue-gray-600">
                {percentage > 0
                  ? <strong className="text-green-500">{percentage}%</strong>
                  : <strong className="text-red-500">{percentage}%</strong>}
        </div>
      </div>
    </div>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-12">
          {value}
          </h1>
    <div className="text-gray-700 dark:text-gray-400 flex flex-row justify-between ">
      <p>{title}</p>
    </div>
  </div>
      </div>

  );
}


export default StatisticsCard;
