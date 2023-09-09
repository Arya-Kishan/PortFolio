import React, { useState } from 'react'
import { Drawer, IconButton,Button, Typography, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import BackpackIcon from '@mui/icons-material/Backpack';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState('transparent');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
      setBg('yellow')
    } else if (window.scrollY < 5) {
      setBg('transparent')
    }
  })
  return (
    <div>
      <section className='nav' style={{ backgroundColor: bg }}>
        <section className='navbar'>
          <div><Typography variant='h4' color={'white'}>Coder</Typography></div>
          <div>
            <ul className='navbar_ul'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
              <div className='hamburger'><IconButton onClick={() => { setOpen(true) }}><MenuIcon /></IconButton></div>
            </ul>
          </div>
        </section>

        <Drawer
          anchor={'top'}
          open={open}
          onClose={() => { setOpen(false) }}
        >
          <Stack bgcolor={'aqua'} width={'100%'}>
            <Button startIcon={<HomeIcon/>} onClick={() => { setOpen(false) }}><a href="#home">Home</a></Button>
            <Button startIcon={<PersonIcon/>} onClick={() => { setOpen(false) }}><a href="#about">About</a></Button>
            <Button startIcon={<BackpackIcon/>} onClick={() => { setOpen(false) }}><a href="#experience">Experience</a></Button>
            <Button startIcon={<ContentPasteGoIcon/>} onClick={() => { setOpen(false) }}><a href="#project">Project</a></Button>
            <Button startIcon={<PhoneIcon/>} onClick={() => { setOpen(false) }}><a href="#contact">Contact</a></Button>
          </Stack>
        </Drawer>
      </section>
    </div>
  )
}

export default Navbar
