import React from "react";
import "./style.css";
import { ReactComponent as Git } from "../../assets/github.svg";
import { ReactComponent as Twitter} from "../../assets/twitter.svg";
import { ReactComponent as Dribble} from "../../assets/dribble.svg";
import { ReactComponent as LinkedIn} from "../../assets/linkedin.svg";
import { ReactComponent as Mail} from "../../assets/mail.svg";



const SocialMedia = () => {
    return (
        <div className="socialMediaContainer">
          <Git/>
          <Twitter/>
          <Dribble/>
          <LinkedIn/>
          <Mail/>
        </div>
    )
}

export default SocialMedia