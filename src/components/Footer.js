import { IconButton, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import React from 'react'

const Footer = () => {
  return (
    <>

      <Stack width={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>

        <Typography>GET IN TOUCH : </Typography>

        <IconButton href="tel:7762994583"><PhoneIcon /></IconButton>

        <IconButton href="mailto:arya12345kishan@gmail.com"><MailOutlineOutlinedIcon /></IconButton>

        <IconButton href='https://wa.me/7762994583'><WhatsAppIcon /></IconButton>

      </Stack>

    </>
  )
}

export default Footer
