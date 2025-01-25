import {  Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import styled from "styled-components";

import HomeNavComp from "./homeNavComp";

const HomeComp = () => {
    const {loggedUser} = useSelector(state=>state.loginRed)
    console.log("homeCOmp",loggedUser)
    return(
        <Wrapper style={{backgroundImage:"url('https://wallpapercave.com/wp/wp9040600.jpg')", backgroundSize: "cover", height: "700px"}}>
            <HomeNavComp />
            <Heading1>
                If Your an Existing Customer Please Login TO Your Account
            </Heading1>
            <Heading1>
                If Your an New Customer Please Register
            </Heading1><Heading1>
                Please Setup Your Password if Your a Regisered Person
            </Heading1>
            <Outlet />
        </Wrapper>
    )
}
export default HomeComp

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
color:red
`;

