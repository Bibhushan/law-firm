import { Box } from "@mui/material";
import './MyApp.css';
import logo from './../assets/logo.png'
import { MyButton, MyOutlinedButton } from "./CustomComponents";

export default function Header(){

    return(
        <Box display='flex' className='header'>
            <img src={logo} alt='Law firm logo'/>
            <Box justifyContent='space-between'>
                <MyButton>Home</MyButton>
                <MyButton>Attorneys</MyButton>
                <MyButton>Practice Areas</MyButton>
                <MyButton>About Us</MyButton>
            </Box>
            <MyOutlinedButton variant='contained'>Contact Now</MyOutlinedButton>
        </Box>
    )
}