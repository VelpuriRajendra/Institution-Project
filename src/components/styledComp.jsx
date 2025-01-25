import {Autocomplete, Button, TextField} from "@mui/material"
import {styled} from "styled-components"
const StyledComp = () => {
    return(
        <Wrapper>
            <Title $primary>
                Iam Styled Component with dynamic color
            </Title>
            <Title>
                Iam Styled Component with dynamic color
            </Title>
            <Marks>90</Marks>
            <Marks>36</Marks>
            <Marks>20</Marks>
            <Button variant="contained">MUI Button</Button>
            <Autocomplete
                disablePortal
                options={["Hi", "Hello"]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
                />
        </Wrapper>
    )
}
export default StyledComp

const Wrapper = styled.div`
padding: 4em;
background: pink;
`;

const Title = styled.h1`
color:${(props)=>props.$primary ? "blue":"red"}
`;

const Marks = styled.h2`
color:${(props)=>props.children >=35 ? "green" : "red"}
`