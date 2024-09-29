import React from "react";

export default function Progress({ title, discription }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-[#242D52] font-semibold">{title}</h3>
            <p className="text-[#242D52] opacity-50">{discription}</p>
        </div>
    )
}