import React, { useState } from 'react'
import '../main.scss'
import { IconButton, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import code1 from '../Images/code1.png'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export default function Homepage() {

  const [show, setShow] = useState('none')

  return (
    <div id='home'>
      <section className='home'>

        <div>
          <Stack justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Stack className='a1' justifyContent={'center'} alignItems={'center'} spacing={0}>
              <Typography variant='subtitle1'>Hello I'm</Typography>
              <Typography variant='h4'>Arya Kishan</Typography>
              <Typography variant='caption'>Frontend Developer</Typography>
            </Stack>

            <Stack className='a2' spacing={2} direction={'row'}>
              <button variant='outlined'>Download CV</button>
              <button variant='contained'>Let's Talk</button>
            </Stack>

          </Stack>
        </div>

        <div>
          <Stack width={'60vw'} height={'60vh'} spacing={2} justifyContent={'space-around'} alignItems={'center'} direction={'column'}>

            <div className="photo"><img src={code1} alt="" srcSet="" /></div>
          </Stack>

        </div>

        <Stack className='option'>

          <Stack width={'100%'} direction={'row'} justifyContent={'flex-end'}>
            <IconButton onClick={() => { setShow(show === 'none' ? 'flex' : 'none') }}><PeopleIcon /></IconButton>
          </Stack>

          <Stack display={show} width={'100%'} direction={'column'} alignItems={'flex-end'}>
            <IconButton href="tel:7762994583"><PhoneIcon /></IconButton>
            <IconButton href="mailto:arya12345kishan@gmail.com"><MailOutlineOutlinedIcon /></IconButton>
            <IconButton href='https://wa.me/7762994583'><WhatsAppIcon /></IconButton>
          </Stack>

        </Stack>
      </section>

    </div>
  )
}
