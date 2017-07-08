//IMAGE LIST component
// IMPORT OUR libraries
import React from 'react';


//CREATE OUR IMAGE LIST component
//we are now recieving the props from ImageList
const ImageDetail = (props) => {
  //props.image -->  this is the image object
  return (
    <li className="collection-item">
      <div className="">
        <img src={props.image.link} className=" img-responsive materialboxed" />
      </div>
      <div className="">
        <h4>
          { props.image.title }
        </h4>
      </div>
      <div className="">
        <p className="flow-text">
         { props.image.description}
        </p>
      </div>
    </li>
  );
};

//EXPORT OUR component
export default ImageDetail;
