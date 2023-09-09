import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
const About = () => {

    const [show1,setShow1] = useState('flex')
    const [show2,setShow2] = useState('none')
    const [show3,setShow3] = useState('none')

    const Show11 = ()=>{
        setShow1('flex')
        setShow2('none')
        setShow3('none')
    }
    const Show22 = ()=>{
        setShow1('none')
        setShow2('flex')
        setShow3('none')
    }
    const Show33 = ()=>{
        setShow1('none')
        setShow2('none')
        setShow3('flex')
    }

    return (
        <div id='about'>
            <section className='about'>
                <div className='about_box1'>
                    <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" />
                </div>
                <div className='about_box2'>

                    <div className='about_heading'>About Me</div>

                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt at eligendi optio, id nobis dignissimos, praesentium fuga sequi molestias perferendis ipsam officiis inventore, asperiores eaque natus voluptate. Et officia quaerat ducimus itaque sint explicabo amet?</div>

                    <Stack direction={'row'} spacing={4}>
                    <div><button onClick={()=>{Show11()}} className='btn' variant='contained'>Skills</button></div>
                    <div><button onClick={()=>{Show22()}} className='btn' variant='contained'>Experience</button></div>
                    <div><button onClick={()=>{Show33()}} className='btn' variant='contained'>Education</button></div>
                    </Stack>

                    <div>
                        <Stack display={show1} spacing={2}>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
                                    <ListItemText>Frontend Development</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
                                    <ListItemText>SASS</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
                                    <ListItemText>GIT & GITHUB</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
                                    <ListItemText>RESPONSIVE WEB DESIGN</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ArrowForwardIcon/></ListItemIcon>
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
