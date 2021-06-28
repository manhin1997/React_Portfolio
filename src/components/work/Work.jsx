import "./work.scss"
import {Dialog, DialogContent, IconButton, DialogActions } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useState} from "react";
import { Translate } from "@material-ui/icons";

const CardList = [
    {
        img : "assets/images/work/neurogym/neurogym_home.png",
        title: "Neurogym - 腦有記",
        des:  "一個進行認知訓練的遊戲平台。遊戲會根據不同的學術研究，設計了一系列有趣、互動的個人化訓練，幫助監測認知表現。",
        clickInfo : {
            title: "Neurogym - 腦有記",
            imgs: ["assets/images/work/neurogym/neurogym_dailymission.png", "assets/images/work/neurogym/neurogym_home.png",
            "assets/images/work/neurogym/neurogym_minigame.png", "assets/images/work/neurogym/neurogym_training.png"]
        }
    },
    {
        img : "assets/images/work/hkhs/hkhs_home.png",
        title: "房協 - 樂得耆所安老計劃",
        des:  "利用不同的小遊戲與活動，例如唱K，推重力球，計加減乘除數。以幫助義工與長者進行交流和互動。",
        clickInfo : {
            title: "房協 - 樂得耆所安老計劃",
            imgs: ["assets/images/work/hkhs/hkhs_ballgame.png", "assets/images/work/hkhs/hkhs_home.png",
            "assets/images/work/hkhs/hkhs_karaoke.png", "assets/images/work/hkhs/hkhs_sumgame.png"]
        }
    },
    {
        img : "assets/images/work/btb/btb_home.png",
        title : "Beat the Beats Rhythm Game",
        des : "A ryhthm game that uses motion tracking to track dance moves via an Android App.",
        clickInfo : {
            title : "Beat the Beats Rhythm Game",
            imgs: ["assets/images/work/btb/btb_home.png", "assets/images/work/btb/btb_dance.png"]
        }
    },
    {
        img : "assets/images/work/tbc/tbc_game.png",
        title : "Turn Base Combat Demo",
        des : "Create a turn base combat system with real time interaction using State Machines.",
        clickInfo : {
            title : "Turn Base Combat Demo",
            imgs: ["assets/images/work/tbc/tbc_game.png", "assets/images/work/tbc/tbc_home.png",
            "assets/images/work/tbc/tbc_win.png"]
        }
    }
]


export default function Work() {
    const [open, setOpen] = useState(false);
    const [clickInfo, setClickInfo] = useState({title : "", imgs: []});
    const [index, setIndex] = useState(0);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (props) => {
        //Set List Image Here
        setClickInfo(props);
        setOpen(true);
        setIndex(0);
    }
    return (
        <div className="work" id="work">
            <DialogBox handleClose = {handleClose} open = {open} clickInfo = {clickInfo} index = {index} setIndex = {setIndex}/>
            <div className = "scroll-spacing"></div>
            <h1 className = "title-work">Previous Work</h1>
            <div className="wrapper">
                {
                    CardList.map((card) => (

                        <Cards {...card} handleOpen = {()=> handleOpen(card.clickInfo)}/>
                    ))
                }
            </div>
            
        </div>
    )
}

function DialogBox(props){
    // Custom Dialog Title
    const DialogTitle = ((props) => {
        const { children, onClose, ...other } = props;
        return (
          <MuiDialogTitle  {...other} style={{position: "relative"}}>
            {children}
            {onClose ? (
              <IconButton aria-label="close" onClick={onClose} style={{position: "absolute", right: "10px", top: "10px"}}>
                <CloseIcon/>
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
    });

    const {index, setIndex, clickInfo} = props;

    const addIndex = () =>{
        //Add index
        setIndex((index + 1) % clickInfo.imgs.length);
        console.log('Index is: '+index);
    }
    const reduceIndex = () => {
        //Reduce Index
        let temp = index - 1;
        if(temp < 0)
            temp = clickInfo.imgs.length - 1;
        setIndex(temp);
        console.log('Index is: '+index);
    }
    console.log("Click Info: "+clickInfo.imgs);

    let slideOutput = clickInfo.imgs.map((item, index) => 
        <div className="slideshowSlider">
            <img src={item} className="slide" key={index} alt="Slideshow"/>
        </div>
    )


    return(
        <Dialog fullWidth={true} maxWidth={"md"} open={props.open}>
            <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                <h3>{clickInfo.title}</h3>
            </DialogTitle>
            <div className="slidebox">
                <div className="slideshow" style={{width: `${clickInfo.imgs.length * 100}%`, transform : `translate3d(${-index * 100 / clickInfo.imgs.length}% ,0,0)`}}>
                    {slideOutput}
                </div>
            </div>
            <div className="slideshowDots">
                {
                    clickInfo.imgs.map((_,idx) => (<div key = {idx} 
                        className ={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick = {() => {setIndex(idx);}}></div>))
                }
            </div>
            <div className="ImageSlider" style={{minHeight : "50px", position: "relative" , display : "flex", flexDirection : "row" , justifyContent : "space-around", top: "-20px"}}>
                <IconButton onClick = {reduceIndex} style = {{left: 0}}> <ArrowBackIcon/> </IconButton>
                <IconButton onClick = {addIndex} style = {{right: 0}}> <ArrowForwardIcon/> </IconButton>
            </div>
            {/* <img src={clickInfo.imgs[index]} style={{padding : "20px"}} alt="Slideshow" className="dialog-Img"/> */}
            {/* <DialogContent>This is a Dialog Content</DialogContent> */}
        </Dialog>
    )
}

//Create a Card function for Work
function Cards(props){
    return(
        <div className="card" onClick = {props.handleOpen}>
                <div className="card-body">
                    <img src={props.img} alt="Card Icon" className="card-Img"/>
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-des">{props.des}</p>
                    <button className="card-btn" color="secondary"> Click Here!</button>
                </div>
        </div>
    )

}
