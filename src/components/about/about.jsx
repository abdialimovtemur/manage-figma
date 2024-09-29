import React from "react";
import Buttons from "../button/button";
import Progress from "../progress/progress";


const About = () => {
    return (
        <div className="container flex justify-between pt-32">
            <div className="flex flex-col gap-6 w-full">
                <h2 className="text-3xl text-[#242D52] font-semibold w-full">What's different about Manage?</h2>
                <p className="text-[#242D52] opacity-50">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>

            <div className="flex flex-col gap-10">
                <div className="flex gap-7 ml-32">
                    <div><Buttons value={"01"}/></div>
                    <Progress title={"Track company-wide progress"}  discription={"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."}/>
                </div>

                <div className="flex gap-7 ml-32">
                    <div><Buttons value={"02"}/></div>
                    <Progress title={"Advanced built-in reports"}  discription={"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."}/>
                </div>

                <div className="flex gap-7 ml-32">
                    <div><Buttons value={"03"}/></div>
                    <Progress title={"Everything you need in one place"}  discription={"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}/>
                </div>
            </div>
        </div>
    )
}

export default About