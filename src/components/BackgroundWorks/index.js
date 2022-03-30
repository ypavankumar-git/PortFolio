import React from "react";
import "./style.css";
import { ReactComponent as FlowLine} from "../../assets/flow line bg.svg";
import { ReactComponent as Table} from "../../assets/margin dashed lines bg.svg";
import {ReactComponent as CurvyCircle} from "../../assets/squiggly circle.svg";
import {ReactComponent as BorderBox} from "../../assets/border box.svg";

const Backgrounds = () => {
    return(
        <div className="backgroundContainer">
          
          <label className="heyThere">Hey  There</label>
          
          <div className="table"><Table/></div>
          
          {/* <div className="flowLine"><FlowLine/></div> */}

          {/* <div className="curvyCircle"><CurvyCircle/></div>          */}

          {/* <div className="photoContainer">
           
            <img src={photo} className="photo"/>

         </div> */}

         {/* <div className="borderBox"><BorderBox/></div> */}

        </div>
    )
}

export default Backgrounds;