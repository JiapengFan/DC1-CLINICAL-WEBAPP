import React from 'react'
import FooterBox from './FooterBox';
import LandingBox from './LandingBox';


// Set via unsplash
const BackgroundImage = () => {
    const keyword1 = 'data,';
    const keyword2 = 'science';

    const backgroundImageStyle = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        backgroundImage: 'url(https://source.unsplash.com/featured/?' + keyword1 + keyword2 + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachement: 'scroll'
    }

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
