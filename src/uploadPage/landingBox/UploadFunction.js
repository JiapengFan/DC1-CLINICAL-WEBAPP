import React, {useState} from 'react'

const UploadFunction = () => {
    const [image, setImage] = useState(null);
    // const [alt, setAlt] = useState(null);

    const imageSetHandler = (e) => {
        image ?
        setImage(prevState => [prevState, e.target.files[0]])
        :
        setImage(e.target.files[0]);
    }

    // const imageAltHandler = (e) => {
    //     alt ?
    //     setAlt(prevState => prevState.concat(e.target.files[0].name))
    //     :
    //     setAlt(e.target.files[0].name);
    // }

    // Handle uploaded image(s)
    const imageUploadHandler = () => {
        console.log(image);
    }

    return (
        <React.Fragment>
            <input 
            type='file' 
            onChange={imageSetHandler} 
            multiple
            /> 
            <br/>
            <button onClick={imageUploadHandler} className='uploadButton'>UPLOAD IMAGE</button>
        </React.Fragment>
    );
}

export default UploadFunction
