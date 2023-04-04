import React,{useState} from 'react'
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider} from '@mui/material'
import Logo from '../../images/logo.svg'
import FastfoodIcon from '@mui/icons-material/Fastfood';
// import DoorFrontIcon from '@mui/icons-material/DoorFront';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
   const [mobileOpen, setMobileOpen] = useState(false)
   //hndle menu click
   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen)
   }
   //menu drawer
   const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
        <Typography 
        color={'white'} 
        variant='h6' 
        component="div" 
        sx={{ flexGrow: 1, my:2 }}>
          {/* <DoorFrontIcon/> */}
          {/* <FastfoodIcon/>
            My Resturant */}
             <img src={Logo} alt="logo" height={"70"} width="250px" />
            </Typography>
              <Divider/>
               <ul className='mobile-navigation'>
                <li>
                   <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                   <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                   <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                   <NavLink to={'/contact'}>Contact</NavLink>
                </li>
               </ul>
           
    </Box>
   )
  return (
    <>
      <Box>
       <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
         <Toolbar>
          <IconButton 
          color='inherit' 
          aria-label='open drawer' 
          edge="start" 
          sx={{
            mr: 2, 
            display: { sm: "none"} }}
             onClick={handleDrawerToggle}>
             <MenuIcon/>
          </IconButton>
           <Typography color={'greenyellow'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
          {/* <DoorFrontIcon/> */}
          {/* <FastfoodIcon/>
          My Resturant */}
          <img src={Logo} alt="logo" height={"70"} width="250px" />
            </Typography>
            <Box sx={{display: { xs: "none", sm: "block" } }}>
               <ul className='navigation-menu'>
                <li>
                   <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                   <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                   <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                   <NavLink to={'/contact'}>Contact</NavLink>
                </li>
               </ul>
            </Box>
         </Toolbar>
       </AppBar>
       <Box component="nav">
           <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            sx={{ display:{xs: 'block', sm: 'none'}, "& .muiDrawer-paper":{boxSizing: "border-box", width: "240px", }}}
           >
              {drawer}
           </Drawer>
       </Box>
       <Box >

       <Toolbar />
       </Box>
       </Box>
    </>
  )
}

export default Header
