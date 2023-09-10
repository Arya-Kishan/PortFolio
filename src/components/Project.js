import React from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import trail from '../Images/Trailflix.jpeg'
import quiz from '../Images/Quiz.jpeg'
import todo from '../Images/Todo.jpeg'
import TelegramIcon from '@mui/icons-material/Telegram';

const Project = () => {
    return (
        <div id='project'>
            <section className='project_main'>
                <div className='project_heading'>My Work</div>
                <section className='project'>

                    <div className="card">
                        <div><img src={trail} alt="" srcSet="" /></div>

                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>Trailflix</Typography>
                                <IconButton href='https://arya-kishan.github.io/Javascript-Trailflix/' variant='contained'><TelegramIcon sx={{fontSize : '30px'}} /></IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div className="card">
                        <div><img src={quiz} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>Quiz</Typography>
                                <IconButton href='https://arya-kishan.github.io/React-Quiz/' variant='contained'><TelegramIcon sx={{fontSize : '30px'}} /></IconButton>
                            </Stack>
                        </div>
                    </div>

                    <div className="card">
                        <div><img src={todo} alt="" srcSet="" /></div>
                        <div className='card_action'>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                <Typography variant={'h5'} color={'white'}>TODO list</Typography>
                                <IconButton href='https://arya-kishan.github.io/React-Todo/' variant='contained'><TelegramIcon sx={{fontSize : '30px'}} /></IconButton>
                            </Stack>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default Project
