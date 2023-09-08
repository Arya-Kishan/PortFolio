import React from 'react'
import '../main.scss'
import { Button, Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Homepage() {
  return (
    <div>
      <section className='home'>

        <div>
          <Stack justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Stack className='a1' justifyContent={'center'} alignItems={'center'} spacing={0}>
              <Typography variant='subtitle1'>Hello I'm</Typography>
              <Typography variant='h4'>Arya Kishan</Typography>
              <Typography variant='caption'>Frontend Developer</Typography>
            </Stack>

            <Stack className='a2' spacing={2} direction={'row'}>
              <Button variant='outlined'>Download CV</Button>
              <Button variant='contained'>Let's Talk</Button>
            </Stack>

            <Stack className='a3' direction={'row'}>
              <Button startIcon={<LinkedInIcon />} />
              <Button startIcon={<TwitterIcon />} />
              <Button startIcon={<WhatsAppIcon />} />
            </Stack>

          </Stack>
        </div>

        <div>
          <Stack width={'60vw'} height={'60vh'} spacing={2} justifyContent={'space-around'} alignItems={'center'} direction={'column'}>

          <Stack className='a4' spacing={2} direction={'row'}>
              <Button variant='outlined'>Download CV</Button>
              <Button variant='contained'>Let's Talk</Button>
            </Stack>

            <div className="photo"><img src="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" srcset="" /></div>
          </Stack>

        </div>
      </section>
    </div>
  )
}
