import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'

import './Header.css'
import Shop from '../Shop';
import { useAuth } from '../AuthProvider';
import Logout from '../Logout';



const drawerWidth = 240;
const navItems = ['Home', 'Bathroom Accessories', 'Other Hardware Accessories', 'About', 'Contact'];
// const navItems2 = ['Login', <Shop />]


function Header(props) {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);


  const navigation = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Citrine Enterprise
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


      {/* <List>
        {navItems2.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}



    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>Hi
      <CssBaseline />
      <AppBar component="nav" className='navbar'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontSize: '1.8rem', fontFamily: 'cursive', textDecoration: 'underline' } }}
          >
            Citrine Enterprise
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', color: 'black !important' } }} className='abcd'>
            {navItems.map((item) => (
              <Button key={item} className='mui-button' onClick={() => {
                if (item === 'Bathroom Accessories') {
                  navigation('/Contact')
                }
                else if (item === 'Checkout') {
                  navigation('/Checkout')
                }
                else if (item === 'Other Hardware Accessories') {
                  navigation('/OtherHardWare')
                }
                else if (item === 'Home') {
                  navigation('/')
                }
                else if (item === 'About') {
                  navigation('/')
                }
                else if (item === 'Contact') {
                  navigation('/')
                }
              }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='abcd2'>
            {/* {navItems2.map((item) => (
              <Button key={item} className='mui-button' onClick={()=>{
                if(item === 'Login'){
                  navigation('/Login')
                }
              }}>
                {item}
              </Button>
            ))} */}
            <div style={{ display: 'flex' }}>
              {authUser ? <Logout /> :
              <Link to="/Login">
                Login
              </Link>
            }
              &nbsp;&nbsp;

              <Shop />


            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );

}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
