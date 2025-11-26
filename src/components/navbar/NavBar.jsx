import { Box, Link } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./NavBar.css"
function NavBar() {
  return (
    <nav className='d-flex justify-content-between align-items-center navbar navbar-expand-lg px-5'>
      <Box color={'white'} fontSize={'32px'} role='button'>Furni<span style={{ color: 'rgb(137, 158, 150)' }}>.</span></Box>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Box>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul >
            <li><a className="active" href="" underline='none'>Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact us</a></li>
            <li role='button'><PersonIcon style={{ color: 'white' }} /></li>
            <li role='button'><ShoppingCartOutlinedIcon style={{ color: 'white' }} /></li>
          </ul>
        </div>
      </Box>
    </nav >
  )
}

export default NavBar