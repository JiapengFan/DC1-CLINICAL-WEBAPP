import React from "react";
// Import unique components
import Header from "./Header";

// Import styling
import { backgroundImageStyle } from "../BackgroundStyle";
import FooterBox from "../uploadPage/FooterBox";
import FootNote from "../uploadPage/landingBox/FootNote";

const RecPage = () => {
    return (
        <div className='backgroundImage' style={backgroundImageStyle}>
            <div className='container'>
                <section className='mainFrame'>
                    <Header degree={2}/>
                    <FootNote />   
                    <FooterBox />
                </section>
            </div>
        </div>
    );
}

export default RecPage;