import styled from "styled-components";

import { Outlet } from "react-router-dom";

import CustomerNavComp from "./customerNavbar";

const CustomerDashboard = () => {
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
