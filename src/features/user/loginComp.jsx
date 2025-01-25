import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { useFormik } from "formik";
import {styled} from "styled-components"


import { useLazyGetloginQuery } from "../../services/loginSevice.api";
import { useRegisterToCunstomerMutation } from "../../services/registrationService.api";
import { useAddCustomerDetailsMutation } from "../../services/signupService.api";

import { addLoggeduser } from "./loginSlice";
import HomeNavComp from "../home/homeNavComp";

const LoginComp = () => {
    const [fun] = useLazyGetloginQuery()
    const [regToCustFun] = useRegisterToCunstomerMutation()
    const [addCustomer] = useAddCustomerDetailsMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userFormik = useFormik({
        initialValues:{
            mobileNumber:"",
            password: "",
            role:""
        },
        onSubmit:(loginDetails)=>{
            console.log("loginDetails",loginDetails)
            fun(loginDetails)
            .then(res=>{if(res.data.length === 0){
                console.log("res",res.data[0])
            }else{
                dispatch(addLoggeduser(res.data[0]))
                console.log("res",res.data[0])
                if(res.data[0].role === "Admin"){
                    navigate("/adminDashboard")
                }
                else{
                    regToCustFun(res.data[0].mobileNumber)
                    .then(res=>addCustomer(res.data[0]))
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

