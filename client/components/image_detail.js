//IMAGE LIST component
// IMPORT OUR libraries
import React from 'react';


//CREATE OUR IMAGE LIST component
//we are now recieving the props from ImageList
const ImageDetail = (props) => {
  //props.image -->  this is the image object
  return (
    <div>
      <img src={props.image.link} />
      <br />
      { props.image.title }
      <br />
      <br />
      { props.image.detail }
      <br />
      <hr />
      <br />
    </div>
  );
};

//EXPORT OUR component
export default ImageDetail;
