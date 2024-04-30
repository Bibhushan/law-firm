import { Box, Grid, Typography } from "@mui/material";
import lawyer_photo from './../assets/lawyer_photo.png';
import { MyHeaderLargest, MyHeaderLargestMedium, MyEmailBox} from "./CustomComponents";
import './MyApp.css';

export default function HomePage(){

    return (
        <Grid container padding='3rem 1rem' spacing={2}>
            <Grid item xs={7}>
                <Box textAlign='left' paddingRight={5}>
                    <MyHeaderLargest>You don't have to</MyHeaderLargest>
                    <MyHeaderLargestMedium>Fight them alone</MyHeaderLargestMedium>
                    <Typography color="grey" fontSize={18} lineHeight={1.6} sx={{textAlign:'left'}}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, 
                        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, 
                        hac massa gravida arcu interdum proin curae.
                    </Typography>
                    <MyEmailBox 
                        placeholder='Enter your email address'
                        buttonText="Let's Talk"
                    />
                    {/* <Box display='flex' alignItem='end'>
                        <RoundedInput placeholder="Enter your email address">
                            <Button>Let's Talk</Button>
                        </RoundedInput>                        
                    </Box> */}
                </Box>
            </Grid>
            <Grid item display='flex' justifyContent='end' xs={5}>
                <img src={lawyer_photo} alt='lawyer' width='100%' height='auto'/>
            </Grid>
        </Grid>
    )

}
