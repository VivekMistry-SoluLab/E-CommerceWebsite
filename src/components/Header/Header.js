import React, { useState } from 'react';
import { Divider, IconButton, List, ListItem, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Header.css';

const Header = () => {
    const [ state, setState ] = useState(false);

    const handleDrawerToggle = () => {
        setState(!state);
    }

    const listItems = (
        <div className="list">
            <nav className="drawer-nav">
                <IconButton>
                    <AccountCircleIcon style={{color: 'white'}} size={35}/> 
                    <div className="nav-head-font">Hello, Sign-In</div>
                </IconButton>
            </nav>
            <List className="list-items" >
                <div className="heading-font">  Trending</div>
                <ListItem button >Best Sellers</ListItem>
                <ListItem button >New Releases</ListItem>
                <ListItem button >Movers and Shakers</ListItem>
                <Divider/>
                <div className="heading-font">Shop By Department</div>
                <ListItem button >Mobile and Computers</ListItem>
                <ListItem button >TV, Applience, Electronics</ListItem>
                <ListItem button >Men's Fashion</ListItem>
                <ListItem button >Women's Fashion</ListItem>
                <Divider/>
                <div className="heading-font">Help & Settings</div>
                <ListItem button >Your Account</ListItem>
                <ListItem button >Customer Service</ListItem>
                <ListItem button >Sign-in</ListItem>
                <Divider/>
            </List>
        </div>
    )
    return(
        <div className="header">
        
            <IconButton className="header-items" style={{color:'white'}} >
                <MenuIcon onClick={handleDrawerToggle} /><Typography >App</Typography>
            </IconButton>
            <Drawer
            variant="temporary"
            anchor='left'
            open={state}
            onClose={handleDrawerToggle}
            className="drawer-paper"
            
          >
            {listItems}
          </Drawer>
          
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Laptop & Computers</IconButton>
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Mobile & Accesories</IconButton>
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Electronics </IconButton>
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Home & Kitchen Appliances</IconButton>
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Fashion</IconButton>
        <IconButton style={{color:'lavenderblush', fontSize:'17px'}} >Today's Deal</IconButton>
          
        </div>
    );
}

export default Header;