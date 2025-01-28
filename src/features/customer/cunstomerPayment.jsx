import { useFormik } from "formik";

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLazyGetSignupQuery, useUpdatePaymentMutation } from "../../services/customerService.api";
import { addLoggeduser } from "../user/loginSlice";


const CustomerPayment = () => {
    const [updatepaymentDetails] = useUpdatePaymentMutation()
    const {data} = useLazyGetSignupQuery()
    console.log(data)
    const {loggedUser} = useSelector(state=>state.loginRed)
    const [loggedUserDetails] = loggedUser
    console.log("loggedUser",loggedUser)
     const customerPaymentFormik = useFormik({
            initialValues:{
                paymentMode:"",
                installment: "",
                remark:"",
                ammount:""
            },
            onSubmit:(details)=>{
                const {paymentMode,installment,remark,ammount } = details
            updatepaymentDetails({paymentDetails: {
                paymentMode: paymentMode,
                [installment]:ammount,
                remark: remark  
            }, id: loggedUserDetails.id}).then(res=>addLoggeduser(res.data))
            // gettingCustDetails()
            }
        })
    return(
        <Wrapper>
            <Grid container spacing={2}>
                <Grid item xs={2} md={3}>
                    
                </Grid>
                <Grid item xs={8} md={6}>
                <Item>
                    <Heading1>Please Login</Heading1>
                    <Box component="form" onSubmit={customerPaymentFormik.handleSubmit}>
                        <TextField fullWidth 
                                    label="Payment Mode" 
                                    name= "paymentMode" 
                                    id="fullWidth"
                                    onChange={customerPaymentFormik.handleChange} 
                                    required/>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Installment</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name= "installment" 
                                label="Installment number"
                                onChange={customerPaymentFormik.handleChange}
                                required>
                                    {<MenuItem value="initialPayment">Initial Payment</MenuItem>}
                                    {<MenuItem value="firstInstallment">First Installment</MenuItem>}
                                    {<MenuItem value="secondInstallment">Second Installment</MenuItem>}
                            </Select>
                            </FormControl>
                            <TextField fullWidth 
                                    label="Remarks" 
                                    name= "remark" 

                                    id="fullWidth"
                                    onChange={customerPaymentFormik.handleChange} 
                                    required/>
                            <TextField fullWidth 
                                    label="Ammount" 
                                    name= "ammount" 
                                    id="fullWidth"
                                    onChange={customerPaymentFormik.handleChange} 
                                    required/>
                        <Button variant="contained" type="submit">Male Payment</Button>
                    </Box>
                </Item>

                </Grid>
                <Grid item xs={2} md={3}>
                    
                </Grid>
            </Grid>
        </Wrapper>
    )
}
export default CustomerPayment

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
`;
const Item = styled.div`
`;
