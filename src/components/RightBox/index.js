import React from "react";
import "./style.css";
import photo from "../../assets/me.png";
import {ReactComponent as CurvyCircle} from "../../assets/squiggly circle.svg";
// import {ReactComponent as Code} from "../../assets/code.svg";
// import {ReactComponent as Art} from "../../assets/art.svg";
// import {ReactComponent as Figma} from "../../assets/figma.svg";
// import {ReactComponent as Gamepad} from "../../assets/gamepad.svg";
// import {ReactComponent as ReactIcon} from "../../assets/react.svg";
// import {ReactComponent as Type} from "../../assets/type.svg";



const RightBox = () => {
    return (
        <div className="rightBoxContainer">
            <div className="photoContainer">
           
              <img src={photo} alt="OOPS" className="photo"/>

            </div>

            <CurvyCircle className="curvyCircle"/>

        </div>
    )
}

export default RightBox;