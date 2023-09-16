import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import undraw1 from '../Images/undraw_programming_re_kg9v.svg'
import undraw2 from '../Images/undraw_react_re_g3ui.svg'
import undraw3 from '../Images/undraw_static_website_re_x70h.svg'

const Experience = () => {
    return (
        <>
            <section className='experience' id='experience'>
                <div className='exp_heading'>Experience</div>
                <section className='exp'>

                    <div className='exp_box' style={{ backgroundColor: 'transparent', border: '0' }}>
                        <img style={{ width: '100%' }} src={undraw2} alt="" />
                    </div>

                    <div className="exp_box">
                        <div className='exp_box_heading'>Frontened development</div>

                        <div className='abc'>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>HTML</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>CSS</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                        </div>

                        <div className='abc'>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>JAVASCRIPT</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>REACT JS</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                        </div>

                        <div className='abc'>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>MATERIAL UI</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                            <div>
                                <div className='ac'>
                                    <div className='ac1 aw'><NavigationIcon sx={{ rotate: '90deg' }} /></div>
                                    <div className='aw'><b>REDUX-TOOLKIT</b></div>
                                    <div className='aw'><span>INTERMEDIATE</span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </section>
        </>
    )
}

export default Experience
