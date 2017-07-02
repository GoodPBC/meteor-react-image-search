//IMAGE LIST component
// IMPORT OUR libraries
import React from 'react';


//CREATE OUR IMAGE LIST component
//we are now recieving the props from ImageList
const ImageDetail = (props) => {
  //props.image -->  this is the image object
  return (
    <li className="">
      <img src={props.image.link} className="circle img-responsive" />
      <br />
      { props.image.title }
      <br />
      <br />
      { props.image.detail }
    </li>
  );
};

//EXPORT OUR component
export default ImageDetail;
