import styled from "styled-components";
import { useSelector } from "react-redux";

import AdminNavComp from "./adminNavbar";
import { Outlet } from "react-router-dom";

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
