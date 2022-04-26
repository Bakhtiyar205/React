
import "./App.scss";
import NameMail from "./Components/NameMail";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Technical from "./Components/Technical";
import Experience from "./Components/Experience";
import Final from "./Components/Final";
import Educat from "./Components/Educat";

function App() {
  return (
    <div className="app-project">
      <div className="page">
        <div className="container">
            <NameMail/>
            <hr></hr>
            <Profile/>
            <hr></hr>
            <Skill/>
            <hr></hr>
            <Technical/>
            <hr></hr>
            <Experience/>
            <hr></hr>
            <Educat/>
            <hr></hr>
            <div className="text-center pb-3">
            <Final/>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default App;
