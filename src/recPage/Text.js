import React, { Component} from "react";

const getText = (degree) => {
    let header = "";
    if (degree === 0) {
        header = "With no DR, the patient's vision is not affected by diabetes. The patient \
        must maintain healthy blood sugar levels and diet and do another test within a year.";
    }
    else if (degree === 1) {
        header = "With mild to moderate DR, Koetting recommends patients to have a dilated \
        eye examination every 6–12 months.\n\n \
        The patient need not see a retina specialist unless the physician is \
        concerned about a diabetic macular enema (DME).\n\n \
        The patient should maintain on their blood sugar level and diet. \n\n \
        If the physician sees cause for further examination, the patient \
        may be referred to their primary care physician or endocrinologist if possible.";
    }
    else if (degree === 2) {
        header = "With Severe to Proliferative (DR), Koetting recommends patients \
        to be monitored using both macular optical coherence tomography (OCT) and \
        fluorescein angiography tests. \n\n \
        It is recommended to meet with a retina specialist IMMEDIATELY, \
        and the patient's primary and care physician and endocrinologist if possible. \n\n \
        Monitoring should take place once every 1–4 months, depending on stage of the disease.\n\n \
        It is VITAL that the patient keep close watch on their sugar levels at this stage, and receive \
        regular checks!";
    }
    else {
        header = "VALUE ERROR: Should be 0, 1, or 2 but '" + degree + "' was found.";
    }
    return header;
}

class Text extends Component {
    render() {
        return (
            <div>
                <p style={{whiteSpace: 'pre-line'}}>{getText(this.props.degree)}</p>
                <br></br>
                <br></br>
                <br></br>
                <p style={{color: '#adadad'}}>Source: C.  Koetting.   The  four  stages  of  diabetic  retinopathy.https://modernod.com/articles/2019-june/the-four-stages-of-diabeticretinopathy?c4src=article:infinite-scroll, 2019.</p>
                <br></br>
            </div>
        );
    }
}

export default Text;