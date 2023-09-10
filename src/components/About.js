import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
const About = () => {

    const [show1, setShow1] = useState('flex')
    const [show2, setShow2] = useState('none')
    const [show3, setShow3] = useState('none')

    const remove = ()=>{
        let list = document.getElementsByTagName('button');
        list = Array.from(list)
        console.log(list)
        list.forEach(element => {
            element.style.backgroundColor = 'blue';
        });
      }

    const Show11 = (e) => {
        remove();
        e.target.style.backgroundColor = 'black';
        setShow1('flex')
        setShow2('none')
        setShow3('none')
    }
    const Show22 = (e) => {
        remove();
        e.target.style.backgroundColor = 'black';
        setShow1('none')
        setShow2('flex')
        setShow3('none')
    }
    const Show33 = (e) => {
        remove();
        e.target.style.backgroundColor = 'black';
        setShow1('none')
        setShow2('none')
        setShow3('flex')
    }

    return (
        <div id='about'>
            <div className='about_heading1'>About Me</div>
            <section className='about'>
                <div className='about_box1'>
                    <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" />
                </div>
                <div className='about_box2'>

                    <div className='about_heading2'>About Me</div>

                    <div>Having strong roots in CSS, HTML and JAVASCRIPT, I am a Front-End Developer trained in modern designing tools and frameworks with entry-level experience specializing in web development, user interface design with responsive and React JS. </div>

                    <Stack direction={'row'} spacing={'4vw'}>
                        <div><button style={{backgroundColor : 'black'}} onClick={(e) => { Show11(e) }} className='btn'>Skills</button></div>
                        <div><button onClick={(e) => { Show22(e) }} className='btn'>Experience</button></div>
                        <div><button onClick={(e) => { Show33(e) }} className='btn'>Education</button></div>
                    </Stack>

                    <div>
                        <Stack display={show1} spacing={2}>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>Frontend Development</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>SASS</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>GIT & GITHUB</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>RESPONSIVE WEB DESIGN</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>MATERIAL UI</ListItemText>
                                </ListItem>
                            </List>
                        </Stack>
                        <Stack display={show2} spacing={2}>
                            <Typography>Null</Typography>
                        </Stack>
                        <Stack display={show3} spacing={2}>
                            <Typography color={'yellow'}>2023-2026</Typography>
                            <Typography>LOVELY  PROFESSIONAL UNIVERSITY</Typography>
                            <Typography color={'yellow'}>2021</Typography>
                            <Typography>GLOBAL PRESIDENCY SCHOOL</Typography>
                            <Typography color={'yellow'}>2019</Typography>
                            <Typography>SUNBEAM SUNCITY SCHOOL</Typography>

                        </Stack>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
