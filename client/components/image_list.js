//IMAGE LIST component
// IMPORT OUR libraries
import React from 'react';
import ImageDetail from './image_detail';

//static data source for our dummy images
const IMAGES = [
  {
    title: 'Joe',
    link: 'https://dummyimage.com/200X200/8188eb/000.png&text=Thumbnail',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non sagittis urna. Aliquam ut nunc eros. In maximus consequat varius. Sed non purus vitae urna pretium blandit non vel urna. Duis dapibus nisl scelerisque ipsum blandit ultricies. Aenean vel venenatis.'},
  {
    title: 'Aleks',
    link: 'https://dummyimage.com/200X200/8188eb/000.png&text=Thumbnail',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non sagittis urna. Aliquam ut nunc eros. In maximus consequat varius. Sed non purus vitae urna pretium blandit non vel urna. Duis dapibus nisl scelerisque ipsum blandit ultricies. Aenean vel venenatis.'},
  {
    title: 'Godfrey',
    link: 'https://dummyimage.com/200X200/8188eb/000.png&text=Thumbnail',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non sagittis urna. Aliquam ut nunc eros. In maximus consequat varius. Sed non purus vitae urna pretium blandit non vel urna. Duis dapibus nisl scelerisque ipsum blandit ultricies. Aenean vel venenatis.'},
  {
    title: 'Jacek',
    link: 'https://dummyimage.com/200X200/8188eb/000.png&text=Thumbnail',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non sagittis urna. Aliquam ut nunc eros. In maximus consequat varius. Sed non purus vitae urna pretium blandit non vel urna. Duis dapibus nisl scelerisque ipsum blandit ultricies. Aenean vel venenatis.'}

]
//CREATE OUR IMAGE LIST component
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail image={image} />
  });
  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

//EXPORT OUR component
export default ImageList;
