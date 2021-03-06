import "./topbar.scss"
import redlogo from "../../resources/images/Icon_red_512.png"
import bluelogo from "../../resources/images/Icon_blue_512.png"

export default function Topbar({menuOpen, setmenuOpen, hoverOnTop, sethoverOnTop}) {
    return (
        <div className={"topbar " + (menuOpen && (" active ")) + (hoverOnTop && (" hoverTheme "))} 
        id="topbar" onMouseEnter ={() => sethoverOnTop(true)} onMouseLeave = {() => sethoverOnTop(false)}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="item">
                        <div className="img_gp">
                            <img src={redlogo} alt="Portfolio Icon" className={"overlap_img " + (!hoverOnTop && (" hidden"))}/>
                            <img src={bluelogo} alt="Portfolio Icon" className={"overlap_img " + (hoverOnTop && (" hidden"))}/>
                        </div>
                    </a>
                    <div className="item">Welcome!</div>
                </div>
                <div className="right">
                    <div className="outline">
                        <div className="hamburger" onClick ={() => setmenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
