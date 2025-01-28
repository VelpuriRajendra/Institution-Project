import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { clearLoggedData } from '../user/loginSlice';

export default function AdminNavComp() {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate("adminProfile")
  };
  const handleViewCustomers = () => {
    navigate("viewCustomers")
  };
  const handleViewRegisters = () => {
    navigate("viewRegisters")
  };
  const handleAddCustomer = () => {
    navigate("addCustomer")
  };
  const handleLogout = () => {
    dispatch(clearLoggedData())
    navigate("/")
  };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{color: "white"}}>Home Page</Link>
          </Typography>
          {auth && (
            <Wrapper>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleViewRegisters}>View All Registers</MenuItem>
                <MenuItem onClick={handleViewCustomers}>View All Customers</MenuItem>
                <MenuItem onClick={handleAddCustomer}>Add Customers</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </Wrapper>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Wrapper = styled.div`
`;