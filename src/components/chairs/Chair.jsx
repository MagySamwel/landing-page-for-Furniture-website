import { Grid2, Typography } from '@mui/material'
import React from 'react'
import './Chair.css'
function Chair() {
    return (
        <Grid2 container className='chair-section bg-light' spacing={3}>
            <Grid2 size={4} display={'flex'}>
                <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" width={'100px'} />
                <Grid2 px={2}>
                <Typography variant="p" component={'p'} style={{color:'black'}}>Nordic Chair</Typography>
                <Typography variant="p" component={'p'}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</Typography>
                <Typography variant="p" component={'p'}>Read More</Typography>
                </Grid2>
            </Grid2>
            <Grid2 size={4} display={'flex'}>
                <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" width={'100px'} />
                <Grid2 px={2}>
                <Typography variant="p" component={'p'} style={{color:'black'}}>Nordic Chair</Typography>
                <Typography variant="p" component={'p'}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</Typography>
                <Typography variant="p" component={'p'}>Read More</Typography>
                </Grid2>
            </Grid2>
            <Grid2 size={4} display={'flex'}>
                <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" width={'100px'} />
                <Grid2 px={2}>
                <Typography variant="p" component={'p'} style={{color:'black'}}>Nordic Chair</Typography>
                <Typography variant="p" component={'p'}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.</Typography>
                <Typography variant="p" component={'p'}>Read More</Typography>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default Chair