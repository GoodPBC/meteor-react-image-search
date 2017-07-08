#LEARNING METEOR AND REACT
## Creating a React Application with Meteor.##

###->Project Name
#### --> .meteor
#### --> client (all code that is executed in the browser) \n
#### --> node_modules
#### --> .gitignore
#### --> package.json

###ReactJS Vs. Meteor###
## Meteor will Keep track of the the data in our application##
##React takes our data and produces HTML with it. It also handles our user events##
###A Meteor Project gives us:###
      1.  a webdev server
      2.  A place to put our code
      3.  A place to track project dependencies

### *Install Meteor* --MAC ONLY
 Enter the following command in terminal -->  "curl https://install.meteor.com/ | sh"
 wait for the installation to finish
### linux and windows instructions     
 https://www.meteor.com/install   




### meteor folder
*Should be left alone it holds all of the files that are specific to the meteor project.*

### *Install React into your Project*
*"npm i --save react"*
*You should now have a node_modules folder. this is where your dependencies are*
*using the --save command will save the dependency to your pakcage.json file*
*meteor-node-stubs dependency is given to us by default by meteor*


### Create a client folder
*Delete the initial client folder and re-create it. In the folder create (touch) an index.html file*
#### It is important to note that anything we place in the client folder will run when a client visits our server at port 3000 ####

### Get React into our project
*we need to create a javascript file in the client folder. this we will call index.js*

*Test that your file works.
 "console.log" a hello world message in the file so that we can make sure we are talking to the client. you should see your message in the console*

*We need to import react library into our project. es6 allows us to import full modules,parts of a module, functions, objects and more *

*We will use an import statement "import React from 'react'"; We will also need an import statement for ReactDOM*

*We create a functional react component using es6's const* *A functional react component is a not aware of its state. it is a basic / static component that is also known as a stateless component.

*We render the component using ReactDOM.render, but we put it inside the Meteor.startup method in order to all the DOM to load first*

###Congratulations you have just made a React component in Meteor

*Lets Move on to a bigger project*

#React Image Voter Application
*We are going to create an image voter application*
*React is all about understanding your data flow and planning the components carefully so that you can manage the application data successfully*
##Challenges
1. How to break up application into components

2. We need to create a list of all the images to show

3. We need to figure out how to get aLL of the individual images to produce one "image detail" for each image we have

*LINK TO PLANNING*

See The React Search UI MockUp

###Create a components folder in client for your React component. ###
*Remember everything in client folder is  what will  be rendered*
*we will then create our components*
1.  image list
2.  image detail
3.  Voting

*Remember, every time we create a React component we need to do 3 things*
1.  import our libraries
2.  Create our component. either functional or class based
 *note --> remember **functional components are stateless, "unaware" of change around them.*
3.  Export our components with the export default statement
###When we get down to the image detail component we need to start thinking about our data source.

*Before building a dynamic data source we will build a static list of images to give our image detail component*

###Building a static list of images for our application

*In our image list file we are going to create a dummy list of images. each images is going to be an object that has a title and a link*

*create an array of objects for the images*

*use dummyimage.com to create placeholders*

###Now we need to create a way for our images to each get into a separate ImageDetail component. This will happen in ImageList component.

*It will be a two step process*
1.  Write a variable inside the ImageList component for images. We make this variable equal to a function that uses the map method to iterate through our IMAGES object. Map, loops through

```const ImageList = () => {
    const RenderedImages = IMAGES.map(function(image) {
      return <ImageDetail />
    });

    return (
      <ul>
        { RenderedImages }
      </ul>
    );
  };
```
2. Instead of returning ImageDetail we replace it with RenderedImages because after we map over the IMAGES object RenderedImages becomes a new array which is an array of all of our ImageDetail components. This is how we solve the problem of rendering multiple components in a list.

###Now we need to figure out a way to to communicate the information that our "image" argument now holds and get it into our <ImageDetail /> in an organized way. This will cause us to have to customize image detail.

*Here we will use props. Props is any data that is passed from a parent to a child. to pass props from parent to child we have to add it to the tag*

```const ImageList = () => {
    const RenderedImages = IMAGES.map(function(image) {
      return <ImageDetail image={image} />
    });

    return (
      <ul>
        { RenderedImages }
      </ul>
    );
  };
```

*Notice that we add our image prop ("image={image}")into the ImageList component and then we pass the prop to the ImageDetail component by referencing our "prop.image.title". THIS IS HOW WE PASS DATA TO A COMPONENT*

### MORE ON props

*for our image list we need to pass particular image from ImageList  information to each component and render it in the image list. Here we use the "props.image.link" and use the prop as the img src.*

*By now you should have somtehing that looks like the react-image-searchUI-unstyled.jpg that is in this project. it will look even more basic than that as that is already slightly styled*

### Styling our components  & the Meteor package manager.

*In order to take advantage of frameworks we can pull them into tour meteor project using the packages that are available to install at https://atmospherejs.com/ . These packages are installed via the command line and all have documentation and github repos to help you work with and implement the packages.*

*To style our components we are going to use materialize, which is a responsive front end framework that is based on googles material design*

*we install it via the command line using the "meteor add materialize:materialize"
command. it takes a moment*

*name we have materialize's front end framework available to us to begin to style our components*

####In react we reference our components with "ClassName" instead of class. The reason for this is that in VanillaJS as of ecmaScript 2016, class is a reserved word in javascript.

*We will take advantage of the predefined style rules that are available to the class's in materialize. We will use collection and collection-item to style our list and we can also use img classes as well. feel free to play around here*

###Key props in lists

*"Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ImageList`."*

*so RenderedImages is our array of ImageDetail components. Whenever we render an array of components in react,React expects that its going to have a key property available on each of the components in the array. This is strictly for performance. it makes it easier for react to render lists of items when the key property is available. We Need to add a prop to image detail to remove this warning.*

*To create a key prop you have assign a key that will be unique to each component in the array. Here we are going to use the title because, for our purposes, the title will be unique for each image in our list.*

##BONUS

*we are going to refactor our function for RenderedImages to make it a fat arrow function*

```const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail key={image.title} image={image} />
});
```

*can be refactored in two ways to be more current for es6*
1.  We can make use of a fat arrow function and since there is only one argument (image) in our function we can remove the parenthesis around it:
 ```const RenderedImages = IMAGES.map(image => {
        return <ImageDetail key={image.title} image={image} />
  });
```
2.  We can use an "implicit return". This mean that we don't have to use the return statement if we do not want to. When we have a single element our a single JS expression, we can use implicit returns. it is optional and is purely syntactic sugar. It looks like this:
```const RenderedImages = IMAGES.map(image =>
       <ImageDetail key={image.title} image={image} />
   );
```
*we remove the return keyword and the curly braces*

###Getting dynamic images into our application using the Imgur API

*this is our endpoint that we will use from IMGUR's API*
*https://api.imgur.com/3/gallery/hot/viral/0.json*

*we need to install the axios package from npm in order to make AJAX requests npm install axios --save*

*To test the response we will make our axios request from the _app.js_ file which is fine for testing purposes *

*Now that we have a response object we have to dial in on the information that we want to render in our app*

##Introducing state in react.
*whenever we are working with data insode of react we want our components to be able to source/fetch its own data a render that data to the screen*

*Here we introduce a Class based component. Class comes from es6's Javascript Classes. Lets look at how we refactor a functional component to a class based component*
####functional app component
```const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  )
}
```
####Class app component
```class App extends Component {
    render(){
      return (
        <div>
          <ImageList />
        </div>
      )
    }  
   };
```

*As you can see above we remove the fat arrow function and replace it with a class statement and also create a render method which is executed whenever the component needs to be rendered to the screen*
*We also need to destructure the React library and bring in our Component class from React by using a destructured import statement*

###Loading data with lifecycle methods
*another method we have access to state aware components in react is componentWillMount "componentWillMount(){ console.log('ayyy')};"*

*This is a method that allows the component to be aware of when it will be rendered and do something before it renders. This make it a great place for our Axios call to happen. as soon as the "componentWillMount" method is called,  the ajax call fires and we get our data. this presents a challenge though because the very next millisecond React will call the render method and the call may not be complete yet. In order to correct this we have to work with STATE*

###Using state in React
*State is property that every class based component that we create has access to. state is a JS object that we can make changes to.When ever we change the state object the component will automatically re-render that component and all of its children*

*Lets figure out how to use state inside a React component*
1. The following app component is a class based component w/o state
```class App extends Component {
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
  };```
```
2. *The is a class based component that takes advantage of state. Notice we ad a constructor method to our class. The constructor method is special method available to us in the JS class. when ever a class is instantiated the constructor method is automatically called. when it is called in React it will be called with the props object. props is passed from component to component.*
*The component class that we are extending from which is implemented by React, has its own special implementation and configuration that it does inside of its own constructor. We call this parent constructor by calling super(props)*

*"this.state = { some: object};" initializes our state. our state object can have multiple properties. here we only have one. we always initialize our state to some reasonable value. Here we can expect that our state will be an array that is a response from our axios.*
```class App extends Component {
  constructor(props) {
    super(props)

    this.state = { images: [] };
  }
  componentWillMount() { //great place to load data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
};
```

*We will do some debugging by console.log 'ing our state in our render method - what happens? --> we should get back an empty array*  
