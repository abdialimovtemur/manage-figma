import React from "react";

export default function Buttons({ value, bg_color }) {
  return (
    <button className={`py-1 px-6 text-white rounded-full shadow-orange-600 shadow-md hover:shadow-orange-500 ${bg_color ? `bg-[${bg_color}] hover:bg-gray-500` : "bg-[#F3603C] hover:bg-orange-400"} `}>{value}</button>
  )
} 