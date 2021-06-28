import "./topbar.scss"

export default function Topbar({menuOpen, setmenuOpen, hoverOnTop, sethoverOnTop}) {
    return (
        <div className={"topbar " + (menuOpen && (" active ")) + (hoverOnTop && (" hoverTheme "))} 
        id="topbar" onMouseEnter ={() => sethoverOnTop(true)} onMouseLeave = {() => sethoverOnTop(false)}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="item">
                        <div className="img_gp">
                            <img src="assets/images/Icon_red_512.png" alt="Portfolio Icon" className={"overlap_img " + (!hoverOnTop && (" hidden"))}/>
                            <img src="assets/images/Icon_blue_512.png" alt="Portfolio Icon" className={"overlap_img " + (hoverOnTop && (" hidden"))}/>
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
