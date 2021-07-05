import "./contact.scss"
import {TextField, makeStyles, Button, createMuiTheme, ThemeProvider} from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios";


const theme = createMuiTheme({
    palette:{
        type: "dark",
    }
})

const formStyles = makeStyles( theme => ({
    root: {
        textAlign: "center",
        '& > *':{
            margin: theme.spacing(2),
            overflow: "visible"
        },
        '& .MuiFormControl-root':{
            width: "80%"
        },
        '& .MuiButtonBase-root':{
            width: "20%"
        }
    }
}));

export default function Contact() {

    const initValue = {
        name : "",
        email : "",
        subject : "",
        description : ""
    }
    
    const [values, setValues] = useState(initValue);

    const classes = formStyles();

    const handleInputChanges = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        });
    }

    const submitForm = (event) => {
        //Sumbit the form via calling API
        axios.put('https://portfoliobackend-318712.uc.r.appspot.com/mail', values)
            .then(response => console.log(response.data));
        resetForm();
        event.preventDefault();
    }

    const resetForm = () => {
        setValues(initValue);
    }

    return (
        <div className="contact" id="contact">
            <div className = "scroll-spacing"></div>
            <ThemeProvider theme={theme}>
                <h1 className = "title-contact">Contact Me</h1>
                <form className = {classes.root} onSubmit = {submitForm}>
                    <TextField
                        required
                        variant="outlined"
                        label="Name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChanges}
                        type="text"
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleInputChanges}
                        type="text"
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChanges}
                        type="email"
                    />
                    <TextField
                        multiline
                        rows={10}
                        rowsMax={20}
                        variant="outlined"
                        label="Description"
                        value={values.description}
                        onChange={handleInputChanges}
                        type="text"
                        name="description"
                        style={{top: "5px"}}
                    />
                    <Button color="primary" type="submit"
                    style=
                    {
                        {
                            backgroundColor: "#2B7C85",
                            color: "#FFFFFF",
                            height: "3.5em",
                            minWidth: "200px",
                            fontSize: "16px"
                        }
                    }>Click to Send Email</Button>
                    <Button color="primary" onClick={resetForm} 
                    style=
                    {
                        {
                            backgroundColor: "#BBBBBB",
                            color: "#FFFFFF",
                            height: "3.5em",
                            minWidth: "200px",
                            fontSize: "16px"
                        }
                    }>Reset</Button>
                </form>
            </ThemeProvider>
        </div>
    )
}
