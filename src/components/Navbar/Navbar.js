import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, MenuItem, Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Navbar.css'
import { NavLink } from 'react-router-dom';
// import Cart from '../../container/Cart/Cart';


const Navbar = (props) => {
    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    

    return(
        <>
            <AppBar className="appbar" style={{backgroundColor:'#0f1111'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                      <NavLink to="/" style={{ textDecoration: 'none', color:'inherit' }}>E-Commerce</NavLink>  
                    </IconButton>
                    <div className="search"> 
                        <input 
                            type="text"
                            // value="Search.."
                            className="search-input"
                        />
                        <div className="search-icon">
                            <IconButton>
                                <SearchIcon /> 
                            </IconButton>  
                        </div>
                        
                    </div>
                    <div>
                        <IconButton
                            // aria-label="account of current user"
                            // aria-controls="menu-appbar"
                            // aria-haspopup="true"
                            // onClick={handleMenu}
                            color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu> */}
                    </div>
                    <div>
                        
                        <IconButton color="inherit">
                        <NavLink exact to="/cart" style={{ textDecoration: 'none', color:'inherit' }}>
                            <ShoppingCartIcon/></NavLink>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;