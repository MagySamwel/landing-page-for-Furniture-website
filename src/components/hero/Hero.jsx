import { Button, Grid2, Stack, Typography } from "@mui/material"
import "./Hero.css"

function Hero() {
  return (
    <Grid2 container className="hero ">
        <Grid2 size={5} py={'70px'} lineHeight={'30px'}>
            <Typography variant="h1" component={'h1'}>Modern Interior Design Studio</Typography>
            <Typography variant="p" component={'p'} >Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                 Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                 <button className="rounded-5 btn btn-warning px-4 py-2 me-2">Shop Now</button>
                 <button className="btn btn-outline-secondary rounded-5 px-4 py-2">Explore</button>
        </Grid2>
        <Grid2 size={7}>
            <img src="./couch.png" width={'700px'} style={{padding:''}}></img>
        </Grid2>
    </Grid2>
  )
}

export default Hero