import {useState } from "react";

import { Box, Button, Grid, TextField } from "@mui/material";

import {styled} from "styled-components"
import { useFormik } from "formik";

import { useRegisterToCunstomerMutation } from "../../services/registrationService.api";
import { useAddCustomerDetailsMutation, useAddRegisterToCustomerMutation } from "../../services/signupService.api";

import HomeNavComp from "../home/homeNavComp";
import ConfirmModalBox from "./confirmModalBox";

const SignupComp = () => {
    const [findingSignupInRegister] = useRegisterToCunstomerMutation()
    const [createPassword] = useAddRegisterToCustomerMutation()
    const [customerDetails] = useAddCustomerDetailsMutation()

    const [modalBoxFlag, setModalBoxFlag] = useState(false)

    const successMessage = `Congratulations Your Details Submittted To Our Signup Portal`
    const registrationMessage = `Signup Completed`

    const signupFormik = useFormik({
        initialValues:{
            mobileNumber:"",
            password:"",
            cnfmPassword:"",
            category:"Customer"
        },
        onSubmit:(signupDetails)=>{
            const {password, cnfmPassword} = signupDetails
            if(password === cnfmPassword){
                findingSignupInRegister(signupDetails)
                .then(res=>{if(res.data.length === 0){
                }else{
                    createPassword(signupDetails)
                    customerDetails(res.data[0])
                    setModalBoxFlag(true)
                }})
            }else{
                alert("mismatch")
            }
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
                    <Heading1>Please Signup</Heading1>
                    <Box component="form" onSubmit={signupFormik.handleSubmit}>
                        <TextField fullWidth label="Enter Your Number/Mail Id" name="mobileNumber" id="fullWidth" onChange={signupFormik.handleChange} required/>
                        <TextField fullWidth label="Create your Password" name="password" id="fullWidth" onChange={signupFormik.handleChange} required/>
                        <TextField fullWidth label="Re-Enter your Password" name="cnfmPassword" id="fullWidth" onChange={signupFormik.handleChange} required/>
                        <Button variant="contained" type="submit">Create Your Password</Button>
                    </Box>
                </Item>

                </Grid>
                <Grid item xs={2} md={3}>
                    
                </Grid>
            </Grid>
            {modalBoxFlag && <ConfirmModalBox flag = {true} 
                                                Smessage = {successMessage} 
                                                Rmessage = {registrationMessage}
                                                linkTO = "login"
                                                cancelBtn = "cancel"
                                                btnName= "Login"/>
            }
        </Wrapper>
    )
}
export default SignupComp

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
`;
const Item = styled.div`
`;

