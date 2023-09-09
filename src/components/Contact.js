import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import email from '../Images/email.png'
import messenger from '../Images/messenger.png'
import whatsapp from '../Images/whats app.png'

const Contact = () => {
    return (
        <div>
            <section className='contact_main' id='contact'>
                <div className='contact_heading'>Contact Me</div>
                <section className='contact'>
                    <div className="contact_box1">

                        <Button href="mailto:arya12345kishan@gmail.com">
                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={email} alt="" srcSet="" />
                                <Typography variant='span' color={'black'}>Email</Typography>
                                <Typography variant='span' color={'black'}>arya69code@gmail.com</Typography>
                                <Typography variant='span' color={'black'}>Send a message</Typography>
                            </Stack>
                        </Button>

                        <Button href="tel:7762994583">

                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={messenger} alt="" srcSet="" />
                                <Typography variant='span' color={'black'}>Messenger</Typography>
                                <Typography variant='span' color={'black'}>aryarajput</Typography>
                                <Typography variant='span' color={'black'}>Send a message</Typography>
                            </Stack>
                        </Button>

                        <Button href='https://wa.me/7762994583'>
                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={whatsapp} alt="" srcSet="" />
                                <Typography variant='span' color={'black'}>whatsapp</Typography>
                                <Typography variant='span' color={'black'}>7762994583</Typography>
                                <Typography variant='span' color={'black'}>Send a message</Typography>
                            </Stack>
                        </Button>
                    </div>
                    <div>

                        <form className="contact_box2" action="">
                            <TextField sx={{ width: '90%', borderRadius: '10px', backgroundColor: 'blue' }} id="outlined-search" label="Your Name" type="search" />

                            <TextField sx={{ width: '90%', borderRadius: '10px', backgroundColor: 'blue' }} id="outlined-search" label="Email" type="search" />

                            <TextField sx={{ width: '90%', borderRadius: '10px', backgroundColor: 'blue' }}
                                id="outlined-multiline-static"
                                label="Multiline"
                                rows={4}
                            />

                            <button>Send</button>
                        </form>

                    </div>
                </section>
            </section>
        </div>
    )
}

export default Contact
