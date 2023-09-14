import React, { useContext, useState } from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import trail from '../Images/Trailflix.jpeg'
import quiz from '../Images/Quiz.jpeg'
import todo from '../Images/Todo.jpeg'
import music from '../Images/music.jpeg'
import restaurant from '../Images/restaurant.jpeg'
import blog from '../Images/blog.jpeg'
import cat from '../Images/cat.jpeg'
import hangman from '../Images/hangman.jpeg'
import tictac from '../Images/tictac.jpeg'
import school from '../Images/school.jpeg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Context } from '../AppContext'
import { motion } from 'framer-motion'


const Project = () => {

    const [more, setMore] = useState(false)
    const [setOpen] = React.useState(false);
    const { showSnack } = useContext(Context)
    const [project, setProject] = useState([
        {
            name: 'TrailFlix',
            img: trail,
            link: 'https://arya-kishan.github.io/Javascript-Trailflix/',
            github: 'https://arya-kishan.github.io/Javascript-Trailflix/'
        },
        {
            name: 'Quiz',
            img: quiz,
            link: 'https://arya-kishan.github.io/React-Quiz/',
            github: 'https://github.com/Arya-Kishan/React-Quiz'
        },
        {
            name: 'Todo',
            img: todo,
            link: 'https://arya-kishan.github.io/React-Todo/',
            github: 'https://github.com/Arya-Kishan/React-Todo'
        },
    ])
    const [moreProject, setMoreProject] = useState([
        {
            name: 'Tic Tac Toe',
            img: tictac,
            link: 'https://arya-kishan.github.io/TIC-TAC-TOE/',
            github: 'https://github.com/Arya-Kishan/TIC-TAC-TOE'
        },
        {
            name: 'Cat Generator',
            img: cat,
            link: 'https://arya-kishan.github.io/Cat-Generator/',
            github: 'https://github.com/Arya-Kishan/Cat-Generator'
        },
        {
            name: 'Hangman',
            img: hangman,
            link: 'https://arya-kishan.github.io/Hangman/',
            github: 'https://github.com/Arya-Kishan/Hangman'
        },
        {
            name: 'School',
            img: school,
            link: 'https://arya-kishan.github.io/SchholWebsite/',
            github: 'https://github.com/Arya-Kishan/SchholWebsite'
        },
        {
            name: 'Restaurant',
            img: restaurant,
            link: 'https://arya-kishan.github.io/CSS-RESTAURANT/',
            github: 'https://github.com/Arya-Kishan/CSS-RESTAURANT'
        },
        {
            name: 'Music',
            img: music,
            link: 'https://arya-kishan.github.io/CSS-MUSIC/',
            github: 'https://github.com/Arya-Kishan/CSS-MUSIC'
        },
        {
            name: 'Blog',
            img: blog,
            link: 'https://arya-kishan.github.io/CSS-BLOG/',
            github: 'https://github.com/Arya-Kishan/CSS-BLOG'
        },
    ])

    const moreProductSnack = () => {
        setMore(true);
        showSnack('CLICK OUTSIDE CARD TO CLOSE !')
    }


    return (
        <div id='project'>
            <section className='project_main'>
                <div className='project_heading'>My Work</div>
                <section className='project'>
                    {
                        project.map((e) => (
                            <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = `${e.link}` }} className="card">
                                <div><img style={{ width: '300px', height: '500px' }} src={e.img} alt="" srcSet="" /></div>
                                <div className='card_action'>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                        <Typography variant={'h5'} color={'white'}>{e.name}</Typography>
                                        <IconButton href={e.github} variant='contained'>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: .5 }}
                                                viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                        </IconButton>
                                    </Stack>
                                </div>
                            </div>
                        ))
                    }
                </section>


                <Stack alignItems={'flex-end'} m={'20px'}>
                    <button onClick={() => { moreProductSnack() }} style={{ width: 'fit-content', backgroundColor: 'transparent' }}>More</button>
                </Stack>

            </section>






            {
                more &&
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: .3 }}
                    viewport={{ once: true }}
                    className='more_project' onClick={() => { setMore(false) }}>
                    {
                        moreProject.map((e) => (
                            <div style={{ width: '300px', height: '500px' }} onClick={() => { window.location.href = `${e.link}` }} className="card">
                                <div><img style={{ width: '300px', height: '500px' }} src={e.img} alt="" srcSet="" /></div>
                                <div className='card_action'>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                                        <Typography variant={'h5'} color={'white'}>{e.name}</Typography>
                                        <IconButton href={e.github} variant='contained'>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: .8 }}
                                                viewport={{ once: true }}><GitHubIcon sx={{ fontSize: '30px' }} /></motion.div>
                                        </IconButton>
                                    </Stack>
                                </div>
                            </div>
                        ))
                    }

                </motion.div>
            }

        </div>
    )
}

export default Project
