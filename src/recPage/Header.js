import React, { Component} from "react";

const getHeader = (degree) => {
    let header = "";
    if (degree === 0) {
        header = "No Diabetic Retinopathy (DR)";
    }
    else if (degree === 1) {
        header = "Mild to Moderate Diabetic Retinopathy (DR)";
    }
    else if (degree === 2) {
        header = "Severe to Proliferative Diabetic Retinopathy (DR)";
    }
    else {
        header = "VALUE ERROR: Should be 0, 1, or 2 but '" + degree + "' was found.";
    }
    return header;
}

class Header extends Component {
    render() {
        return (
            <h1>{getHeader(this.props.degree)}</h1>
        );
    }
}

export default Header;