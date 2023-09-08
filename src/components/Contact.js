import React from 'react'
import { Stack, TextField, Typography } from '@mui/material'

const Contact = () => {
    return (
        <div>
            <section className='contact_main'>
                <div className='contact_heading'>Contact Me</div>
                <section className='contact'>
                    <div className="contact_box1">
                        <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                            <img src="Images/email.png" alt="" srcset="" />
                            <Typography>Email</Typography>
                            <Typography>arya69code@gmail.com</Typography>
                            <Typography>Send a message</Typography>
                        </Stack>
                        <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                            <img src="Images/messenger.png" alt="" srcset="" />
                            <Typography>Messenger</Typography>
                            <Typography>aryarajput</Typography>
                            <Typography>Send a message</Typography>
                        </Stack>
                        <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                            <img src="Images/whats app.png" alt="" srcset="" />
                            <Typography>whatsapp</Typography>
                            <Typography>7762994583</Typography>
                            <Typography>Send a message</Typography>
                        </Stack>
                    </div>
                    <div>

                        <form className="contact_box2" action="">
                            <TextField sx={{ width: '90%'}} id="outlined-search" label="Your Name" type="search" />

                            <TextField sx={{ width: '90%'}} id="outlined-search" label="Email" type="search" />

                            <TextField sx={{ width: '90%'}}
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
