import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";

function App(){
  const [menuOpen, setmenuOpen] = useState(false);
  const [hoverOnTop, sethoverOnTop] = useState(false);
  return(
      <div className="app">
          <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} hoverOnTop={hoverOnTop} sethoverOnTop={sethoverOnTop}/>
          <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}  hoverOnTop={hoverOnTop} sethoverOnTop={sethoverOnTop}/>
          <div className="sections">
            <Intro/>
            <Portfolio/>
            <Work/>
            <Contact/>
          </div>
      </div>
  );
}



export default App;