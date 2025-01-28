import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CustomerNavComp from "./customerNavbar";

const CustomerDashboard = () => {
    const {loggedUser} = useSelector(state=>state.loginRed)
    // console.log(loggedUser)
    return(
        <Wrapper>
            <CustomerNavComp />
            <Outlet />
        </Wrapper>
    )
}
export default CustomerDashboard

const Wrapper = styled.div`
`;
