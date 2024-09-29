import React from "react";
import User_info from "../user_info/user_info";
import UserPhoto from "../../assets/girl.svg"
import Buttons from "../button/button";


const Said = () => {
    return (
        <div className="container flex text-center pt-20 flex-col gap-10">
            <h4 className="text-3xl text-[#242D52] font-semibold w-full pb-20">What they've said</h4>
            <div className="flex justify-between gap-10">
                <User_info img={UserPhoto} title={'Anisha Li'} discription={"“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"} />
                <User_info img={UserPhoto} title={'Anisha Li'} discription={"“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"} />
            </div>
            <div><Buttons value={"Get Started"} /></div>
        </div>
    )
}

export default Said