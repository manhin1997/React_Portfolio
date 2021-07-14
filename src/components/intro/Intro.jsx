import "./intro.scss";
import Typed from "react-typed";
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function intro() {
    var ReactFitText  = require('react-fittext');
    return (
        
        <div className= "intro" id="intro">
            <div className="wrapper">
                <div className = "space">
                    <ReactFitText compressor = {1.25} maxFontSize = {64}>
                        <div className="title" >Hello, My name is</div>
                    </ReactFitText>
                    <ReactFitText compressor = {1.25} maxFontSize = {64}>
                        <div className="title" >Henry Lee</div>
                    </ReactFitText>
                    <ReactFitText compressor = {1.25} maxFontSize = {64}>
                        <div className="title" >I am capable of:</div>
                    </ReactFitText>
                </div>
                <ReactFitText compressor = {1.0} maxFontSize = {80}>
                <Typed
                    className="type-text"
                    strings={["Web Design", "Web Developmenet" , "Backend Development"
                    , "Game Design", "Game Developement"]}
                    typeSpeed = {80}
                    backSpeed = {40}
                    backDelay = {100}
                    loop = {true}
                />
                </ReactFitText>

                <a href="#portfolio"><ExpandMore className="expand"/></a>
            </div>

        </div>
    )
}
