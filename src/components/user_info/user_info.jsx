import React from "react";

export default function User_info({img,title,discription}) {
    return (
        <div className="flex flex-col gap-5 items-center bg-[#FAFAFA] relative py-10 px-3 pt-16">
            <div className="absolute top-[-35px]"><img src={img} alt="userImg" /></div>
            <h4 className="text-xl text-[#242D52] ">{title}</h4>
            <p className="text-[#242D52] opacity-50">{discription}</p>
        </div>
    )
}