// import logo from './logo.svg';
import './App.css';
// import SocialMedia from "./components/SocialMedia";

import Title from "./components/Title";
import Backgrounds from "./components/BackgroundWorks";
import RightBox from "./components/RightBox";

function App() {
  return (
    <div className="App">
        <div className="mainContainer">
          <Title/>
          <Backgrounds/>
          <RightBox/>
        </div>
    </div>
  );
}

export default App;
