import { useFormik } from "formik";

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from "styled-components";


const CUstomerPayment = () => {
     const customerPaymentFormik = useFormik({
            initialValues:{
                paymentMode:"",
                InstallmentNumber: "",
                remark:"",
                ammount:""
            },
            onSubmit:(details)=>{
                console.log("loginDetails",details)
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
                                name= "InstallmentNumber" 
                                label="Installment number"
                                onChange={customerPaymentFormik.handleChange}
                                required>
                                <MenuItem value="FirstInstallment">First Installment</MenuItem>
                                <MenuItem value="SecondInstallment">Second Installment</MenuItem>
                                <MenuItem value="ThirdInstallment">Third Installment</MenuItem>
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
export default CUstomerPayment

const Wrapper = styled.div`
`;
const Heading1 = styled.h1`
`;
const Item = styled.div`
`;
