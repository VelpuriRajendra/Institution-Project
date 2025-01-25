import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from "react-router-dom";

import styled from "styled-components";

const HomeNavComp = () => {
    return(
        <Wrapper>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{color: "white"}}>Home Page</Link>
                    </Typography>
                    <Button color="inherit"><Link to="/login"  style={{color: "white"}}>Login</Link></Button>
                    <Button color="inherit"><Link to="/registration"  style={{color: "white"}}>Register</Link></Button>
                    <Button color="inherit"><Link to="/signup"  style={{color: "white"}}>Signup</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </Wrapper>
    )
}
export default HomeNavComp

const Wrapper = styled.div`
`;


