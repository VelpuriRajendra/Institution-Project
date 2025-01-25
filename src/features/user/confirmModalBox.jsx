import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmModalBox(props) {
  const {flag, Smessage, Rmessage, linkTO, cancelBtn, btnName} = props
  const [open, setOpen] = React.useState(flag);
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {Rmessage}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Smessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>{cancelBtn}</Button>
        <Button onClick={()=>(navigate("/"+linkTO))} autoFocus>
            {btnName}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}