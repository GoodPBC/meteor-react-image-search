// destructured react import
import React from 'react';
import ReactDOM from 'React-dom';
import ImageList from './components/image_list';
// create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  )
}

Meteor.startup( () =>{  //method from meteor that allows us to wait till loaded
  //render a component
  //<App /> is an instance of the App component that we just created
  ReactDOM.render(<App />, document.querySelector('.container'));  //use the react dom library--to render--the app component -- to some HTML element with class container

});
