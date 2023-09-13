import React, { useContext, useState } from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import trail from '../Images/Trailflix.jpeg'
import quiz from '../Images/Quiz.jpeg'
import todo from '../Images/Todo.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Context } from '../AppContext'
import { motion } from 'framer-motion'


const Project = () => {

    const [more, setMore] = useState(false)
    const [setOpen] = React.useState(false);
    const { showSnack } = useContext(Context)

    const moreProductSnack = () => {
        setMore(true);
        showSnack('CLICK OUTSIDE CARD TO CLOSE !')
    }

    return (
        <div id='project'>
            <section className='project_main'>
                <div className='project_heading'>My Work</div>
                <section className='project'>

                    <div onClick={() => { window.location.href = 'https://arya-kishan.github.io/Javascript-Trailflix/' }} className="card">
                        <div><img src={trail} alt="" srcSet="" /></div>

                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>Trailflix</Typography>
                                <IconButton href='https://arya-kishan.github.io/Javascript-Trailflix/' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Quiz/' }} className="card">
                        <div><img src={quiz} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>Quiz</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Quiz' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                </section>

                <Stack alignItems={'flex-end'} m={'20px'}>
                    <button onClick={() => { moreProductSnack() }} style={{ width: 'fit-content', backgroundColor : 'transparent' }}>More</button>
                </Stack>

            </section>










            {
                more &&
                <div className='more_project' onClick={() => { setMore(false) }}>

                    <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = 'https://arya-kishan.github.io/React-Todo/' }} className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://github.com/Arya-Kishan/React-Todo' variant='contained'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: .3 }}
                                        viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                </IconButton>
                            </Stack>
                        </div>
                    </div>


                </div>
            }

        </div>
    )
}

export default Project
