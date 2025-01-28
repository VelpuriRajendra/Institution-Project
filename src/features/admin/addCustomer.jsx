import {useState } from "react";

import {styled} from "styled-components"
import { useFormik } from "formik";

import { Box, Button, Grid, TextField } from "@mui/material";

import { useAddRegisterToCustomerMutation } from "../../services/customerService.api";

import ConfirmModalBox from "../user/confirmModalBox";

const AddCustomer = () => {
        const successMessage = `Congratulations Your Details Submittted To Our Portal`
    const registrationMessage = `Registration Completed`

    const [addCustomerFun] = useAddRegisterToCustomerMutation()

    const [modalBoxFlag, setModalBoxFlag] = useState(false)


    const registrationFormik = useFormik({
        initialValues:{
            fullName: "",
            mobileNumber: "",
            mailId: "",
            course: "",
            fee:"",
            password:"",
            cnfPassword:"",
            role:"Customer"
        },
        onSubmit:(val)=>{
           if(val.password === val.cnfPassword){
            addCustomerFun(val)
           }
        }
        
    })
    console.log("registrationFormik",registrationFormik)
    return(
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item xs={2} md={3}>
                    
                </Grid>
                <Grid item xs={8} md={6}>
                <Item>
                    <Heading1>Please Enter Your Details</Heading1>
                    <Box component="form" onSubmit={registrationFormik.handleSubmit}>
                        <TextField fullWidth label="Enter Your Full Name" 
                                    name= "fullName" 
                                    required
                                    id="fullWidth" 
                                    onChange={registrationFormik.handleChange}/> 
                        <TextField fullWidth label="Enter Your Mobile Number" 
                                    name= "mobileNumber" 
                                    id="fullWidth"
                                    required
                                    onChange={registrationFormik.handleChange}/>
                        <TextField fullWidth label="Enter Your Mail Id"  
                                    name= "mailId" 
                                    id="fullWidth" 
                                    required
                                    onChange={registrationFormik.handleChange}/>
                        <TextField fullWidth label="Enter your Course " 
                                    name= "course" 
                                    id="fullWidth" 
                                    required
                                    onChange={registrationFormik.handleChange}/>
                        <TextField fullWidth label="Enter your Fee" 
                                    name= "fee" 
                                    id="fullWidth"
                                    required 
                                    onChange={registrationFormik.handleChange}/>
                        <TextField fullWidth label="Enter your password" 
                                    name= "password" 
                                    id="fullWidth"
                                    required 
                                    onChange={registrationFormik.handleChange}/>
                        <TextField fullWidth label="Re-Enter your password" 
                                    name= "cnfPassword" 
                                    id="fullWidth"
                                    required 
                                    onChange={registrationFormik.handleChange}/>
                        <Button variant="contained" type="submit">Click To Add Customer</Button>
                    </Box>
                    {modalBoxFlag && <ConfirmModalBox 
                                        flag = {true} 
                                        Smessage = {successMessage} 
                                        Rmessage = {registrationMessage}
                                        linkTO = "signup"
                                        cancelBtn = "Cancel"
                                        btnName = "Signup"/>}
                </Item>

                </Grid>
                <Grid item xs={2} md={3}>
                    
                </Grid>
            </Grid>
        </Wrapper>
    )
}
export default AddCustomer

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
`;
const Item = styled.div`
`;


