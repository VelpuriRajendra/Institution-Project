import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useGetSignupQuery } from "../../services/signupService.api";

const ViewCustomers = () => {
    const {data} = useGetSignupQuery()
        //initialQuery will give u the object in that we get(current data, data, endpoint name, iserror, isloading, issuccess, timestamp)
    // const [customerFun, customerDetails] = useLazyGetRegistersDetailsQuery()
        //lazy query will give u the array (in that one function nd 2 objects)
    console.log(data)
    return(
        <div>
            <h1>
            View Customers
            </h1>
            {data?.map((details)=>{
               return <div>
                      <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">{details.fullName}</Typography>
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
                    </Accordion>
                    </div>
                })}
        </div>
    )
}
export default ViewCustomers
