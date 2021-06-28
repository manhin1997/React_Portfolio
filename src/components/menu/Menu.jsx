import "./menu.scss"

export default function Menu({menuOpen,setmenuOpen, hoverOnTop}) {
    return (
        <div className={"menu " +(menuOpen && " active ") + (hoverOnTop && " hoverTheme ")} id="menu">
                <ul>
                    <li><a href="#intro" onClick={()=> {setmenuOpen(false)}}>Intro</a></li>
                    <li><a href="#portfolio" onClick={()=> {setmenuOpen(false)}}>Portfolio</a></li>
                    <li><a href="#work" onClick={()=> {setmenuOpen(false)}}>Work</a></li>
                    {/* <li><a href="#contact" onClick={()=> {setmenuOpen(false)}}>Contact</a></li> */}
                </ul>
        </div>
    )
}
