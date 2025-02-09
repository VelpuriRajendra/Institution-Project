import {useState } from "react";

import { Box, Button, Grid, TextField } from "@mui/material";

import {styled} from "styled-components"
import { useFormik } from "formik";

import { useRegisterToCunstomerMutation } from "../../services/registrationService.api";
import { useAddRegisterToCustomerMutation } from "../../services/customerService.api";

import HomeNavComp from "../home/homeNavComp";
import ConfirmModalBox from "./confirmModalBox";
import { useSelector } from "react-redux";

const SignupComp = () => {
    const [findingSignupInRegister] = useRegisterToCunstomerMutation()
    const [createPassword] = useAddRegisterToCustomerMutation()

    const [modalBoxFlag, setModalBoxFlag] = useState(false)
    const [misMatchErr, setMisMatchErr] = useState()

    const successMessage = `Congratulations Your Details Submittted To Our Signup Portal`
    const registrationMessage = `Signup Completed`

    const {loggedUser} = useSelector(state=>state.loginRed)
    console.log("signupCompLoggedUser", loggedUser)

    const signupFormik = useFormik({
        initialValues:{
            mobileNumber:"",
            password:"",
            cnfmPassword:"",
            role:"Customer",
            initialPayment:"",
            firstInstallment:"",
            secondInstallment:""
        },
        onSubmit:(signupDetails)=>{
            const {password, cnfmPassword} = signupDetails
            if(password === cnfmPassword){
                findingSignupInRegister(signupDetails)
                .then(res=>{if(res.data.length === 0){
                    
                }else{
                    createPassword(signupDetails)
                    setModalBoxFlag(true)
                }})
            }else{
                setMisMatchErr("Password Mis-Matching")
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
                        <p style={{color: "red"}}>{misMatchErr}</p>
                        <TextField fullWidth label="Re-Enter your Password" name="cnfmPassword" id="fullWidth" onChange={signupFormik.handleChange} required/>
                        <p style={{color: "red"}}>{misMatchErr}</p>
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

