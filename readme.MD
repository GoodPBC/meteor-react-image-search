#LEARNING METEOR AND REACT #
## Creating a React Application with Meteor. ##

->Project Name
 --> .meteor
 --> client (all code that is executed in the browser)
 --> node_modules
 --> .gitignore
 --> package.json

###ReactJS Vs. Meteor###
## Meteor will Keep track of the the data in our application##
##React takes our data and produces HTML with it. It also handles our user events##
###A Meteor Project gives us:###
      1.  a webdev server
      2.  A place to put
      3.  A place to track project dependencies

### *Install Meteor* --MAC ONLY###
 Enter the following command in terminal -->  "curl https://install.meteor.com/ | sh"
 wait for the installation to finish
      https://www.meteor.com/install --> linux and windows instructions

 Enter the following command in terminal -->  "curl https://install.meteor.com/ | sh"
 wait for the installation to finish.

### *Create Meteor Project* --MAC ONLY###
*type the command to create your project*


###.meteor folder###
*Should be left alone it holds all of the files that are specific to the meteor project.*

### *Install React into your Project* ###
*"npm i --save react"*
*You should now have a node_modules folder. this is where your dependencies are*
*using the --save command will save the dependency toyour pakcage.json file*
*meteor-node-stubs dependency is given to us by default by meteor*


### Create a client folder ###
*in the folder create (touch) an index.html file*
#### It is important to note that anything we place in the client folder will run when a client visits our server at port 3000 ####

### Get React into our project###
*we need to create a javascript file in the client folder. this we will call index.js*

*Test that your file works.. console.log a hello world message in the file so that we can make sure we are talking to the client. you should see your message in the console*

*We need to import react library into our project. es6 allows us to import full modules,parts of a module, functions, objects and more *
*We will import React from 'react'; We will also need to import ReactDOM*
*We create a functional component using es6's const*
*We render the component using ReactDOM.render, but we put it inside the Meteor.startup method in order to all the DOM to load first*

###Congratulations you have just made a React component in Meteor###
*Lets Move on to a bigger project*

#React Image Voter Application#
*We are going to create an image voter application*
*React is all about understanding your data flow and planning the components carefully so that you can manage the application data successfully*
##Challenges ##
1. How to break up application into components

2. We need to create a list of all the images to show

3. We need to figure out how to get aLL of the individual images to produce one "image detail" for each image we have
*LINK TO PLANNING* https://www.lucidchart.com/documents/edit/493e38a4-d1c8-445f-901b-4543760ad696#

###Create a components folder in client for your React component. ###
*Remember everything in client folder is  what will  be rendered*
*we will then create our components*
1.  image list
2.  image detail
3.  Voting

*Remember, everytime we create a React component we need to do 3 things*
1.  import our libraries
2.  Create our component. either functional or class based *note --> functional components are stateless, "unaware" of change around them.*
3.  Export our components with the export default statement
###When we get down to the image detail component we need to start thinking about our data source. ###
*Before building a dynamic data source we will build a static list of images to give our image detail compnent*

######
**

######
**

######
**
