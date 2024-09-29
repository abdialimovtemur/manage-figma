import React from "react";

import hero from '../../assets/hero.svg'
import Buttons from "../button/button";


const Hero = () => {
    return (
        <div className="container flex justify-between pt-24">
            <div className="flex flex-col gap-6 mr-52">
                <h1 className="text-[#242D52] text-5xl font-semibold">Bring everyone together to build better products.</h1>
                <p className="text-[#242D52] opacity-50">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <div><Buttons value={"Get Started"}/></div>
            </div>
            <div className="w-full"><img src={hero} alt="" /></div>
        </div>
    )
}

export default Hero