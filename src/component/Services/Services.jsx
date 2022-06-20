import React from 'react'
import "./Services.css"
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
import resume from './mohit_resume.pdf'

function Services() {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>Our Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Incidunt beatae ducimus, ed.
                </span>
                <a href={resume} download>

                    <button className='button s-button' > Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>

            </div>
            {/* right side */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={heartemoji}
                        heading={'Design'}
                        details={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={glasses}
                        heading={'Developers'}
                        details={'Reactjs, Node, Vue, Javascript, HTML5, CSS3'}
                    />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={humble}
                        heading={'UI/UX'}
                        details={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatem possimus quisquam'}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>
        </div>
    )
}

export default Services