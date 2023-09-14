import React from 'react'
import '../main.scss'
import { Stack, Typography } from '@mui/material'
import code1 from '../Images/code1.png'
import cv from '../arya_cv.pdf'

export default function Homepage() {

  return (
    <div id='home'>
      <section className='home'>

        <div className='animate__animated animate__backInLeft '>
          <Stack justifyContent={'center'} alignItems={'center'} spacing={4}>
            <Stack className='a1' justifyContent={'center'} alignItems={'center'} spacing={0}>
              <Typography variant='h5'>Hello I'm</Typography>
              <Typography variant='h2'>Arya Kishan</Typography>
              <Typography variant='h5'>Frontend Developer</Typography>

              <Stack className='a2' spacing={2} direction={'row'} pt={'2vh'}>
                <a className='download_btn' href={cv} download="Arya_CV"><button >Download CV</button></a>
                <button ><a href="#contact">Let's Talk</a></button>
              </Stack>
            </Stack>

          </Stack>
        </div>

        <div className='homepage_pic_div animate__animated animate__backInRight'>
          <Stack width={'60vw'} height={'60vh'} spacing={2} justifyContent={'space-around'} alignItems={'center'} direction={'column'}>
            <div className="photo"><img src={code1} alt="" srcSet="" /></div>
          </Stack>
        </div>
      </section>

    </div>
  )
}
