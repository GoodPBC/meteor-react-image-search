//IMAGE LIST component
// IMPORT OUR libraries
import React from 'react';
import ImageDetail from './image_detail';

//static data source for our dummy images
const IMAGES = [
  {title: 'Joe', link: 'https://dummyimage.com/200x150/00bbf5/000.jpg&text=image'},
  {title: 'Aleks', link: 'https://dummyimage.com/200x150/00bbf5/000.jpg&text=image'},
  {title: 'Godfrey', link: 'https://dummyimage.com/200x150/00bbf5/000.jpg&text=image'},
  {title: 'Jacek', link: 'https://dummyimage.com/200x150/00bbf5/000.jpg&text=image'}

]
//CREATE OUR IMAGE LIST component
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail />
  });
  return (
    <ul>
      { RenderedImages }
    </ul>
  );
};

//EXPORT OUR component
export default ImageList;
