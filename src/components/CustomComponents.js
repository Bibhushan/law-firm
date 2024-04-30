import { EmailOutlined } from "@mui/icons-material";
import { Button, Input, InputAdornment, styled, Typography } from "@mui/material";

const MyButton = styled(Button)({
    textTransform:'none',
    fontSize:'0.75rem',
    fontWeight: 500,
    backgroundColor: '#111111',
    color: '#FFFFFF',
    height: 40,
    padding: '0px 16px'
})

const MyOutlinedButton = styled(MyButton)({
    border: '1px solid',
    borderRadius: 0
})

const MyHeaderLargest = styled(Typography)({
    fontSize: 66,
    textAlign:'left'
})

const MyHeaderLargestMedium = styled(MyHeaderLargest)({
    fontWeight: 500
})

const RoundedInput = styled(Input)({
    width: 400,
    height:64,
    borderRadius:32,
    paddingRight: 0,
    paddingLeft: '1rem',
    backgroundColor: 'grey',
    color:'#FFFFFF',
    margin: '2rem 0rem',
    fontSize: '0.9rem'
})

const RoundedButton = styled(Button)({
    textTransform:'none',
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E3B748',
    color: '#000000',
    padding:'1rem 2rem',
    fontSize: '0.9rem'
})

const MyEmailBox = ({placeholder, buttonText})=>{
    return (
        <RoundedInput
            startAdornment={
                <InputAdornment position='start'>
                    <EmailOutlined/>
                </InputAdornment>            
            }
            endAdornment={
                <InputAdornment position='end' sx={{paddingRight:'4px'}}>
                    <RoundedButton width={132}>{buttonText}</RoundedButton>
                </InputAdornment>
            }
            placeholder={placeholder}
        >            
        </RoundedInput>
    )
}

export {MyButton, MyOutlinedButton, MyHeaderLargestMedium, MyHeaderLargest, MyEmailBox};