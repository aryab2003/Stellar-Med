import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);


  const navigate = useNavigate();
  function handlePatient(event) {
    navigate('./Patientlist');
 }


  return (
    <div className="">
    <div className="flex gap-10 sm:divide-x justify-center mx-auto h-full items-center sm:flex-row flex-col">
      <div className="font-mono	mb-96 ml-16">  
           <div class="flex -space-x-1 overflow-hidden my-5">
              <img class="inline-block h-32 w-32 rounded-full ring-2 ring-white" src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-doctor-icon-circle-png-image_5281907.jpg" alt=""/>
           </div>
        <h1 className="text-5xl mb-3">Hello Doctor</h1>
        <h3 className="text-3xl mb-5">Good Evening</h3>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "onClick={handlePatient}>
             Check patients
        </button>
        <h1 className="text-3xl my-5 ">
          Today's Quote: <br /> "Health is Wealth"
        </h1>
        

      </div>
    
      <div className="w-96 h-96 bg-white p-4 rounded shadow-lg mb-64 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="select-none font-semibold text-2xl">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-4 items-center">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 text-center">
          {days.map((day, index) => (
            <h1
              key={index}
              className="text-sm h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
            
          ))}
          
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm border-t"
              > 
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            )
          )}
        </div>
      </div>
      <div className="h-96 w-96 sm:px-5 mb-64 ">
        <h1 className="font-semibold text-2xl">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>
        <p className="text-gray-400">No meetings for today.</p>
      </div>
    </div>
    </div>
  );
}
