import React, { useState } from "react";
import styled from "./Calender.module.css";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const handlePrevMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };
  const handleNextMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const emptyDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyDays.push(<div key={`empty-${i}`} className="day empty"></div>);
  }

  return (
    <div className={styled.calender}>
      <div className={styled.header}>
        <FcPrevious onClick={handlePrevMonth} fontSize="2rem" />
        <h1>
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </h1>

        <FcNext onClick={handleNextMonth} fontSize="2rem" />
      </div>

      <div className={styled.weekdays}>
        {weekdays.map((weekday, index) => (
          <div key={`weekday-${index}`} className={styled.weekday}>
            {weekday.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className={styled.days}>
        {emptyDays}
        {days.map((day) => (
          <div key={`day-${day}`} className={styled.day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calender;
