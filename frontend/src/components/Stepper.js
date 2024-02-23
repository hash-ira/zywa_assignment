import React from "react";
import moment from "moment";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { IoMdReturnLeft } from "react-icons/io";

function Stepper({ cardStatusData }) {
  console.log("stepper", cardStatusData);
  let lastElement;
  if (cardStatusData.length && cardStatusData[cardStatusData.length - 1].status === "delivery attempted") {
    lastElement = cardStatusData[cardStatusData.length - 1];
  }
  return (
    <div className="w-full mt-8 px-6">
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {cardStatusData?.map((item, key) => {
          return (
              <li key={key} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full -start-4 text-white">
                      {item.status === "picked up" && <FaTruckFast />}
                      {item.status === "delivery attempted" && <IoIosAlert />}
                      {item.status === "delivered" && <TiTick />}
                      {item.status === "returned" && <IoMdReturnLeft />}
              </span>
                  <h3 className="font-medium text-white">{item?.status.toUpperCase() }</h3>
                  { (item.comment.length > 0 && item.status === "delivery attempted") && <p className="text-sm">{ item.comment} </p>}
                  <div className="flex justify-between">
                    <p className="text-sm">{moment(item?.lastUpdate).format('DD-MM-YYYY')} </p>
                    <p className="text-sm">{moment(item?.lastUpdate).format('HH:mm')} </p>  
                  </div> 
            </li>
          );
        })}

        {lastElement && <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-400 rounded-full -start-4 text-white">
                      <TiTick />
              </span>
                  <h3 className="font-medium text-white">DELIVERED</h3>
            </li>}
      </ol>
    </div>
  );
}

export default Stepper;
