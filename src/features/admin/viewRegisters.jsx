import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useGetRegistersDetailsQuery} from "../../services/registrationService.api"

const ViewRegisters = () => {
    const {data} = useGetRegistersDetailsQuery()
    //initialQuery will give u the object in that we get(current data, data, endpoint name, iserror, isloading, issuccess, timestamp)
    // const [customerFun, customerDetails] = useLazyGetRegistersDetailsQuery()
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
                        Total Fee: {details.fee}
                        </AccordionDetails>

                    </Accordion>
                    </div>
                })}
        </div>
    )
}
export default ViewRegisters

