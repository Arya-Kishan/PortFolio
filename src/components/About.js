import React from 'react'
import img1 from '../Images/client.png'
const About = () => {
    return (
        <div id='about'>
            <div className='about_heading'>About Me</div>
            <section className='about'>
                <div className='about_box1'>
                    <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" srcSet="" />
                </div>
                <div className='about_box2'>

                    <div className='about_cards'>
                        <div className='about_card'>
                            <div><img src={img1} alt="" srcSet="" /></div>
                            <div>Clients</div>
                            <div>200+ World</div>
                        </div>
                        <div className='about_card'>
                            <div><img src={img1}  alt="" srcSet="" /></div>
                            <div>Clients</div>
                            <div>200+ World</div>
                        </div>
                        <div className='about_card'>
                            <div><img src={img1}  alt="" srcSet="" /></div>
                            <div>Clients</div>
                            <div>200+ World</div>
                        </div>
                    </div>

                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt at eligendi optio, id nobis dignissimos, praesentium fuga sequi molestias perferendis ipsam officiis inventore, asperiores eaque natus voluptate. Et officia quaerat ducimus itaque sint explicabo amet?</div>

                    <div><button className='btn' variant='contained'>Let's Talk</button></div>
                </div>
            </section>
        </div>
    )
}

export default About
