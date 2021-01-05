import React, { Component } from "react";
// Import unique components
import Header from "./Header";
import Text from "./Text";
import CM from "./sample_confusion_matrix.png";

// Import styling
import { backgroundImageStyle } from "../BackgroundStyle";
import FooterBox from "../uploadPage/FooterBox";
import FootNote from "../uploadPage/landingBox/FootNote";

// Styling in-line
const confusionMatrix = {
    width: '500px',
    maxHeight: '400px',
    height: 'auto'
}

const wrapper = {
    display: 'flex'
}

class RecPage extends Component {
    render() {

        return (
            <div className='backgroundImage' style={backgroundImageStyle}>
                <div className='container'>
                    <section className='mainFrame'>
                        <Header degree={this.props.degree}/>
                        <div className="wrapper" style={wrapper}>
                            <img src={CM} alt="Confusion matrix" style={confusionMatrix}/>
                            <Text degree={this.props.degree}/>
                        </div>
                        {/* <FootNote />    */}
                        <FooterBox />
                    </section>
                </div>
            </div>
        );
    }
}

export default RecPage;