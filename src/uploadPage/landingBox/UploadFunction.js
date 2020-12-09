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
            <form action = "http://localhost:5000/upload" 
            method = "POST"
            // encType is CRUCIAL for the backend
            encType = "multipart/form-data"> 
                <input 
                type='file' 
                name = "file[]"
                onChange={imageSetHandler} 
                multiple
                /> 
                <br/>
                <input type = "submit" className='uploadButton'/>
            </form>
        </React.Fragment>
    );
}

export default UploadFunction
