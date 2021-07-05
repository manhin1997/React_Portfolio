import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className = "scroll-spacing"></div>
            <h1 className = "title-port">Education / Experience</h1>
            <div className="timeline">
                <div className="container left">
                    <div className="date">SEP 2016 <br className="show-mobile"/>-<br/>SEP 2020</div>
                    <i className="icon fas fa-graduation-cap"></i>
                    <div className="content">
                        <h2><b>BSc (HONS) COMPUTING</b> |
                            <br/>Hong Kong Polytechnic University</h2>
                        <p>Courses and Dissertation:
                            <br/>• Game Design
                            <br/>• Programming
                            <br/>• Design Patterns
                            <br/>• Dissertation: “Beat the beats” – rhythm game based on a PC / Mobile platform</p>
                    </div>
                </div>
                <div className="container right">
                <div className="date">JAN 2019 <br className="show-mobile"/>-<br/>AUG 2019</div>
                    <i className="icon fas fa-shield-alt"></i>
                    <div className="content">
                        <h2><b>IT Intern (Information Security Governance Team)</b> |
                            <br/>Hong Kong Housing Society</h2>
                        <p>Create an informational video about office internet security with animations using Microsoft PowerPoint and Adobe illustrator.
                            <br/>Discover and delete over 30 legacy accounts which are unused / invalid over the past year.
                        </p>
                    </div>
                </div>
                <div className="container left">
                <div className="date">MAY 2020 <br className="show-mobile"/>-<br/>PRESENT</div>
                    <i className="icon fas fa-gamepad"></i>
                    <div className="content">
                        <h2><b>Game Developer</b> |
                            <br/>Medmind Technology</h2>
                        <p>Help maintain and develop a mobile application called Neurogym. A gamified cognitive training platform that helped trained the elderlies.
                            <br/>Create a mobile application for HKHS which participate in the Ageing-in-Place Scheme.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
