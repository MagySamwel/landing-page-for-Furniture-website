import { Grid2, Typography } from "@mui/material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CameraIcon from '@mui/icons-material/Camera';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import './Choose.css'
function Choose() {
    return (
        <Grid2 container className='choose bg-light w-100' spacing={4}>
            <Grid2 size={{xs:12,md:6}}>
                <Typography variant="h4" component={'h2'}>Why Choose Us</Typography>
                <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                <Grid2 container justifyContent={'space-between'} py={'40px'} spacing={{xs:3, md:0}}>
                    <Grid2 size={{xs:12,md:5}} >
                        <LocalShippingIcon></LocalShippingIcon>
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                    </Grid2>
                    <Grid2 size={{xs:12,md:5}}>
                        <LocalMallIcon></LocalMallIcon>
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent={'space-between'} spacing={{xs:3, md:0}}>
                    <Grid2 size={{xs:12,md:5}} >
                        <CameraIcon></CameraIcon>
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                    </Grid2>
                    <Grid2 size={{xs:12,md:5}}>
                        <ChangeCircleIcon style={{color:''}}></ChangeCircleIcon>
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                            Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 size={{xs:12,md:6}}>
                <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" width={'80%'} alt=""
                    style={{ marginLeft: '100px' }} className="rounded-4 d-flex mx-auto" />
            </Grid2>
        </Grid2>
    )
}

export default Choose