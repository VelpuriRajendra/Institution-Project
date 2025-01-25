import styled from "styled-components";

import CustomerNavComp from "./customerNavbar";
import { Outlet } from "react-router-dom";

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
