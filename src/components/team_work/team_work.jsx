import React from "react";
import Buttons from "../button/button";

const Team_work = () => {
    return (
        <div className="py-14 bg-[#F3603C] mt-20">
            <div className="flex justify-between container">
                <h3 className="text-white text-2xl font-semibold">Simplify how your team works today.</h3>
                <Buttons value={"Get started"} bg_color={"#FFFFFF"} />
            </div>
        </div>
    )
}

export default Team_work