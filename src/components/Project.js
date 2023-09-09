import React from 'react'
import { Button, Stack, Typography } from '@mui/material'

const Project = () => {
    return (
        <div id='project'>
            <section className='project_main'>
                <div className='project_heading'>Project</div>
                <section className='project'>

                    <div className="card">
                        <div><img src="https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" /></div>
                        <div>
                            <Typography>Trailflix</Typography>
                        </div>
                        <div>
                            <Stack direction={'row'} spacing={2}>
                            <Button className='btn' variant='contained'>Github</Button>
                            <Button href='https://arya-kishan.github.io/Javascript-Trailflix/' variant='contained'>Live</Button>
                            </Stack>
                        </div>
                    </div>

                    <div className="card">
                        <div><img src="https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" /></div>
                        <div>
                            <Typography>Quiz</Typography>
                        </div>
                        <div>
                            <Stack direction={'row'} spacing={2}>
                            <Button variant='contained'>Github</Button>
                            <Button href='https://arya-kishan.github.io/React-Quiz/' variant='contained'>Live</Button>
                            </Stack>
                        </div>
                    </div>

                    <div className="card">
                        <div><img src="https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" /></div>
                        <div>
                            <Typography>TODO list</Typography>
                        </div>
                        <div>
                            <Stack direction={'row'} spacing={2}>
                            <Button variant='contained'>Github</Button>
                            <Button href='https://arya-kishan.github.io/React-Todo/' variant='contained'>Live</Button>
                            </Stack>
                        </div>
                    </div>

                    <div className="card">
                        <div><img src="https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" /></div>
                        <div>
                            <Typography>Calculator</Typography>
                        </div>
                        <div>
                            <Stack direction={'row'} spacing={2}>
                            <Button variant='contained'>Github</Button>
                            <Button href='https://arya-kishan.github.io/React-Calculator/' variant='contained'>Live</Button>
                            </Stack>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default Project
