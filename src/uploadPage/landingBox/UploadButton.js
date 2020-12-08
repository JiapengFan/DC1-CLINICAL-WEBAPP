import React from 'react'

  const UploadButton = () => {
    return (
      <form action = "http://localhost:5000/upload" method = "POST" 
      // encType is CRUCIAL for this to work
         encType = "multipart/form-data">
         <input type = "file" name = "file[]" multiple/>
         <input type = "submit"/>
      </form>
    );
}

export default UploadButton;