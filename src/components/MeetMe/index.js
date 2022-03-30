import React from "react";
import { ReactComponent as Arrow} from "../../assets/arrow-up-right.svg";
import { ReactComponent as CurvyLine} from "../../assets/sqiggley line.svg";
import "./style.css";

const MeetMe = () => {
    return(
        <div className="meetMeContainer">
            <CurvyLine className="curvyLine"/>
            <div className="meetBorderBox">
              <div className="meetBox">
                <label className="meetText">Meet Me</label>
                <Arrow className="arrow"/>
              </div>
            </div>
        </div>
    )
}

export default MeetMe;