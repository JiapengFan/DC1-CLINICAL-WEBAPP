import React from 'react'
import FooterBox from './FooterBox';
import LandingBox from './LandingBox';
import { backgroundImageStyle } from "../BackgroundStyle";

// Set via unsplash
const BackgroundImage = () => {
    return (
        <div className='backgroundImage' style={backgroundImageStyle}>
            <div className='container'>
                <section className="mainFrame">
                    <LandingBox />
                    <FooterBox />
                </section>
            </div>
        </div>
    )
}

export default BackgroundImage
