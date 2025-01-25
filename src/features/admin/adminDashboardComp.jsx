import { Outlet } from "react-router-dom";

import styled from "styled-components";

import AdminNavComp from "./adminNavbar";

const AdminDashboard = () => {
    return(
        <Wrapper>
            <AdminNavComp />
            <Outlet />
        </Wrapper>
    )
}
export default AdminDashboard

const Wrapper = styled.div`
`;
