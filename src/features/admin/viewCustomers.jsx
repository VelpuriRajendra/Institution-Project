import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styled from 'styled-components';

import { useGetSignupQuery, useLazyGetSignupQuery } from "../../services/customerService.api";
import { useGetRegistersDetailsQuery } from '../../services/registrationService.api';


const ViewCustomers = () => {
    const {data} = useGetSignupQuery()
    // console.log(data)
    return(
        <Wrapper>
            <h1>
            View Customers
            </h1>
            {data?.map((details)=>{
                console.log(details)
               return <Wrapper>
                      <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">{details.fullName? details.fullName: "Not Yet Logged"}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        Mobile Number: {details.mobileNumber}
                        </AccordionDetails>
                        <AccordionDetails>
                        Mail ID: {details.mailId}
                        </AccordionDetails>
                        <AccordionDetails>
                        Course Name: {details.course}
                        </AccordionDetails>
                        <AccordionDetails>
                        Password: {details.password}
                        </AccordionDetails>
                        <AccordionDetails>
                        Total Fee: {details.fee}
                        </AccordionDetails>
                        <AccordionDetails>
                        Initial Payment: {details.initialPyment ? details.initialPyment:"-"}
                        </AccordionDetails>
                        <AccordionDetails>
                        First Installment: {details.firstInstallment? details.firstInstallment: "-"}
                        </AccordionDetails>
                        <AccordionDetails>
                        Second Installment: {details.secondInstallment? details.secondInstallment: "-"}
                        </AccordionDetails>
                    </Accordion>
                    </Wrapper>
                })}
        </Wrapper>
    )
}
export default ViewCustomers

const Wrapper = styled.div`
`;
