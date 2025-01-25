import { useSelector } from "react-redux"

import styled from "styled-components";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustomerProfile() {
  const {loggedUser} = useSelector(state=>state.loginRed)
  return (
    <Wrapper>
       { loggedUser.map((details)=>{
        return <Wrapper>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://th.bing.com/th/id/OIP.LOk9FQRY-n6jgAZY6RXGlwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Your Total-Fee: {details.fee}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Wrapper>
       })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;