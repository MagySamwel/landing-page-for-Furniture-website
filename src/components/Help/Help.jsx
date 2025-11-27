import { Grid2, ImageList, ImageListItem, Typography } from '@mui/material'
import './Help.css'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
function Help() {
    const itemData = [
        {
            img: 'https://themewagon.github.io/furni/images/img-grid-1.jpg',
            title: 'Bed',
            cols: 2,
            rows: 2,

        },
        {
            img: 'https://themewagon.github.io/furni/images/img-grid-2.jpg',
            title: 'Kitchen',
        },
        {
            img: 'https://themewagon.github.io/furni/images/img-grid-3.jpg',
            title: 'Sink',
            style:'zIndex: 1',
        },
    ]
    return (
        <Grid2 container className='help-section bg-light w-100' spacing={7}>
            <Grid2 size={{xs:12,md:7}} order={{xs:2, md:1}}>
                <ImageList cols={3} gap={16}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={index} rows={item.rows} cols={item.cols || 1}>
                            <img
                                src={item.img}
                                alt={`img-${index}`}
                                loading="lazy"
                                style={{ borderRadius: '20px'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                {/* <img src='https://themewagon.github.io/furni/images/img-grid-3.jpg' width={'380px'} style={{translate:'344px -308px',borderRadius:'20px'}}></img> */}
            </Grid2>
            <Grid2 size={{xs:12,md:5}} order={{xs:1, md:2}}>
                <Typography variant="h4" component={'h2'} pb={3}>We Help You Make Modern Interior Design</Typography>
                <Typography variant="p" component={'p'}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                     Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada</Typography>
                <Grid2 container justifyContent={'space-between'} py={3}>
                    <Grid2 size={5} display={'flex'} >
                        <FiberManualRecordOutlinedIcon style={{ marginTop: '5px', padding: '5px' }} />
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada.</Typography>
                    </Grid2>
                    <Grid2 size={5} display={'flex'}>
                        <FiberManualRecordOutlinedIcon style={{ marginTop: '5px', padding: '5px' }} />
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada.</Typography>
                    </Grid2>
                    <Grid2 size={5} display={'flex'}>
                        <FiberManualRecordOutlinedIcon style={{ marginTop: '5px', padding: '5px' }} />
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada.</Typography>
                    </Grid2>
                    <Grid2 size={5} display={'flex'}>
                        <FiberManualRecordOutlinedIcon style={{ marginTop: '5px', padding: '5px' }} />
                        <Typography variant="p" component={'p'}>Donec vitae odio quis nisl dapibus malesuada.</Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent={'space-between'}>
                </Grid2>
                <button className="rounded-5 btn btn-dark px-4 py-2 my-4">Explore</button>
            </Grid2>

        </Grid2>

    )
}

export default Help