import { IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}><Typography>ARYA KISHAN : </Typography>
        <IconButton><FacebookIcon /></IconButton>
        <IconButton><InstagramIcon /></IconButton>
        <IconButton><TwitterIcon /></IconButton>
      </Stack>

    </div>
  )
}

export default Footer
