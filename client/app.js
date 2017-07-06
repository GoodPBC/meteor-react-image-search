// destructured react import
import React, {Component} from 'react';
import ReactDOM from 'React-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// create a component
class App extends Component {
  componentWillMount() { //great place to load data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
};
//anyhting inside of this function will be fired after our app has loaded
Meteor.startup( () =>{

  //render a component
  //<App /> is an instance of the App component that we just created
  ReactDOM.render(<App />, document.querySelector('.container'));  //use the react dom library--to render--the app component -- to some HTML element with class container




});
