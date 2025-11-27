import { Button, Grid2, IconButton, Stack, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Product.css'
function Product() {
    return (
        <Grid2 container className='product-section bg-light flex-row align-items-center justify-content-center w-100' spacing={{md:1,xs:10}}>
            <Grid2 size={{xs:12, md:3}}>
                <Typography variant="h4" component={'h2'}>Crafted with excellent material.</Typography>
                <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                <button className="rounded-5 btn btn-dark px-4 py-2 me-2">Explore</button>

            </Grid2>
            <Grid2 size={{xs:12, md:3}} className="product-img" role='button'>
                <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" className="d-flex mx-auto" width={'300px'} />
                <Typography textAlign={'center'} variant="h6" fontSize={'17px'} pt={3}>Nordic Chair</Typography>
                <Typography textAlign={'center'} variant="h6" className="fw-bold">$50.00</Typography>
                <Stack className="icon">
                        <AddCircleIcon fontSize="large" sx={{margin:'auto'}} role='button' />
                </Stack>
            </Grid2>
            <Grid2 size={{xs:12, md:3}} className="product-img" role='button'>
                <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" className="d-flex mx-auto" width={'300px'} />
                <Typography textAlign={'center'} variant="h6" fontSize={'17px'} pt={3}>Kruzo Aero Chair</Typography>
                <Typography textAlign={'center'} variant="h6" className="fw-bold">$78.00</Typography>
                <Stack className="icon">
                        <AddCircleIcon fontSize="large" sx={{margin:'auto'}} role='button' />
                </Stack>
            </Grid2>
            <Grid2 size={{xs:12, md:3}} className="product-img" role='button'>
                <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" className="d-flex mx-auto" width={'300px'} />
                <Typography textAlign={'center'} variant="h6" fontSize={'17px'} pt={3}>Ergonomic Chair</Typography>
                <Typography textAlign={'center'} variant="h6" className="fw-bold">$43.00</Typography>
                <Stack className="icon">
                        <AddCircleIcon fontSize="large" sx={{margin:'auto'}} role='button' />
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default Product