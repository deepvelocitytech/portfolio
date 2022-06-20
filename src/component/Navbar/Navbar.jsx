import React from 'react'
import Toogle from '../Toogle/Toggle'
import './navbar.css'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Mohit</div>
                <Toogle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Ecperiance</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="button n-button">
                    contact 
                </div>
            </div>
        </div>
    )
}

export default Navbar