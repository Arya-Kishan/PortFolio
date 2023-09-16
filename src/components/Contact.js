import React, { useRef } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import email from '../Images/email.png'
import messenger from '../Images/messenger.png'
import whatsapp from '../Images/whats app.png'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jyzpe85', 'template_4e0qade', form.current, 'uNmBipyUvWR34WO5x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        let input12 = document.getElementsByTagName('input');
        input12 = Array.from(input12);
        input12.forEach(element => {
            element.value = '';
        });

        let textarea12 = document.getElementsByTagName('textarea');
        textarea12 = Array.from(textarea12);
        textarea12.forEach(element => {
            element.value = '';
        });
    };
    return (
        <div>
            <section className='contact_main' id='contact'>
                <div className='contact_heading'>Contact Me</div>
                <section className='contact'>
                    <div className="contact_box1">

                        <Button href="mailto:arya12345kishan@gmail.com">
                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={email} alt="" srcSet="" />
                                <Typography variant='span' color={'white'}>Email</Typography>
                                <Typography variant='b' color={'yellow'} pt={'2vh'}>Send a message</Typography>
                            </Stack>
                        </Button>

                        <Button href="tel:7762994583">

                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={messenger} alt="" srcSet="" />
                                <Typography variant='span' color={'white'}>Messenger</Typography>
                                <Typography variant='b' color={'yellow'} pt={'2vh'}>Send a message</Typography>
                            </Stack>
                        </Button>

                        <Button href='https://wa.me/7762994583'>
                            <Stack width={'200px'} className='contact_card' alignItems={'center'}>
                                <img src={whatsapp} alt="" srcSet="" />
                                <Typography variant='span' color={'white'}>whatsapp</Typography>
                                <Typography variant='b' color={'yellow'} pt={'2vh'}>Send a message</Typography>
                            </Stack>
                        </Button>
                    </div>
                    <div>

                        <form className="contact_box2" ref={form} onSubmit={sendEmail}>
                            <input type='text' name='name' className='input' placeholder='Your Name' />

                            <input type='email' name='email' className='input' placeholder='Your Email' />

                            <textarea rows="8" cols="50" name='message' className='input' placeholder='Your Message' />

                            <button>Send</button>
                        </form>

                    </div>
                </section>
            </section>
        </div>
    )
}

export default Contact
