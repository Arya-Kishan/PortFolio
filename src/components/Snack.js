import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Context } from '../AppContext'
import { Typography } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const { setOpenContext, message } = React.useContext(Context)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  React.useEffect(()=>{
    setOpenContext([handleClick])
  },[setOpenContext])

  return (
    <>
    {/* {openContext && handleClick} */}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            <Typography>{message}</Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
