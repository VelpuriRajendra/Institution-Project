import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";

import { useFormik } from "formik";
import {styled} from "styled-components"


import { useLazyGetThroughMobileNumberQuery } from "../../services/registrationService.api";
import { useAddCustomerDetailsMutation, useLazyGetloginQuery } from "../../services/customerService.api";

import { addLoggeduser } from "./loginSlice";
import HomeNavComp from "../home/homeNavComp";
import ConfirmModalBox from "./confirmModalBox";





const LoginComp = () => {
    const [fun] = useLazyGetloginQuery()
    const [addCustomer] = useAddCustomerDetailsMutation()
    const [getViaMobileNumber] = useLazyGetThroughMobileNumberQuery()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [modalBoxFlag, setModalBoxFlag] = useState(false)

    const {loggedUser} = useSelector(state => state.loginRed)
    console.log("loginCompLoggedUser",loggedUser)

    const sessionDetails = JSON.parse(window.localStorage.getItem("loggedData"))
    console.log(sessionDetails)
    // useEffect(()=>{
    //     sessionDetails?.forEach((val)=>{
    //         if(val.role === "Admin"){
    //             navigate("/adminDashboard")
    //         }
    //         else{
    //             navigate("/customerDashboard")
    //         }
    //     }, [])
    // })

    const userFormik = useFormik({
        initialValues:{
            mobileNumber:"",
            password: "",
            role:""
        },
        onSubmit:(loginDetails)=>{
            fun(loginDetails)
            .then(res=>{if(res?.data?.length === 0){
                console.log("res",res.data[0])
                setModalBoxFlag(true)
            }else{
                console.log("res",res.data[0])
                const dd = [res.data[0]]
                if(res.data[0].role === "Admin"){
                    window.localStorage.setItem("loggedData", JSON.stringify(dd));
                    dispatch(addLoggeduser(res?.data[0]))
                    navigate("/adminDashboard")
                }
                else{
                    console.log("resLoggedDetails",res.data[0])
                    window.localStorage.setItem("loggedData", JSON.stringify(dd));
                    getViaMobileNumber(res?.data[0]?.mobileNumber)
                    .then(res=>addCustomer(res?.data[0]))
                    dispatch(addLoggeduser(res?.data[0]))
                    navigate("/customerDashboard")
                }
            }}) 
        }
    })
    return(
        <Wrapper>
            <HomeNavComp />
            <Grid container spacing={2}>
                <Grid item xs={2} md={3}>
                    
                </Grid>
                <Grid item xs={8} md={6}>
                <Item>
                    <Heading1>Please Login</Heading1>
                    <Box component="form" onSubmit={userFormik.handleSubmit}>
                        <TextField fullWidth 
                                    label="Enter Your Number/Mail Id" 
                                    name= "mobileNumber" 
                                    id="fullWidth"
                                    onChange={userFormik.handleChange} 
                                    required/>
                        <TextField fullWidth 
                                    label="Enter your Password" 
                                    name= "password" 
                                    id="fullWidth" 
                                    onChange={userFormik.handleChange}
                                    required/>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name= "role" 
                                label="Age"
                                onChange={userFormik.handleChange}
                                required>
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="Customer">Customer</MenuItem>
                            </Select>
                            </FormControl>
                        <Button variant="contained" type="submit">LOG IN</Button>
                    </Box>
                </Item>

                </Grid>
                <Grid item xs={2} md={3}>
                    
                </Grid>
            </Grid>
            {modalBoxFlag && <ConfirmModalBox flag = {modalBoxFlag} 
                                                            Smessage = {"Registered Issue"} 
                                                            Rmessage = {"Please Register to login"}
                                                            linkTO = "/registration"
                                                            cancelBtn = "cancel"
                                                            btnName= "Registration Page"/>}
        </Wrapper>
    )
}
export default LoginComp

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
`;
const Item = styled.div`
`;

