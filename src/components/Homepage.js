import React, { useState } from 'react'
import '../main.scss'
import { IconButton, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import code1 from '../Images/code1.png'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import cv from '../arya_cv.pdf'

export default function Homepage() {

  const [show, setShow] = useState('none')

  return (
    <div id='home'>
      <section className='home'>

        <div>
          <Stack justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Stack className='a1' justifyContent={'center'} alignItems={'center'} spacing={0}>
              <Typography variant='h5'>Hello I'm</Typography>
              <Typography variant='h2'>Arya Kishan</Typography>
              <Typography variant='h5'>Frontend Developer</Typography>
            </Stack>

            <Stack className='a2' spacing={2} direction={'row'}>
              <a href={cv} download="arya_cv"><button >Download CV</button></a>
                <button ><a href="#contact">Let's Talk</a></button>
            </Stack>

          </Stack>
        </div>

        <div>
          <Stack width={'60vw'} height={'60vh'} spacing={2} justifyContent={'space-around'} alignItems={'center'} direction={'column'}>

            <div className="photo"><img src={code1} alt="" srcSet="" /></div>
          </Stack>

        </div>

        <div className='option'>

          <Stack className='option_icon' width={'100%'} direction={'row'} justifyContent={'flex-end'}>
            <IconButton sx={{ color: 'yellow' }} onClick={() => { setShow(show === 'none' ? 'flex' : 'none') }}><PeopleIcon /></IconButton>
          </Stack>

          <Stack display={show} width={'100%'} direction={'column'} alignItems={'flex-end'}>
            <IconButton href="tel:7762994583"><PhoneIcon /></IconButton>
            <IconButton href="mailto:arya12345kishan@gmail.com"><MailOutlineOutlinedIcon /></IconButton>
            <IconButton href='https://wa.me/7762994583'><WhatsAppIcon /></IconButton>
          </Stack>

        </div>
      </section>

    </div>
  )
}
