import React, { useState } from "react";
import Notes from "../components/Notes"
import FeaturedAll from "../components/HomeNavLayout/FeaturesAll"

const More = props => {



    // const [selectedDashboard, setSelectedDashboard] = useState('VolumesByDB')

    return (
        <>
        <div className="text-center">
        <FeaturedAll tab={"VolumesByDB"}/>
<br />
        <Notes />
        
</div>
    </>
  );
}
export default More;