Angular 2 Fundamentals
======================
THIS DEMO APPLICATION WAS PRODUCED BASED ON THE PLURALSIGHT 'ANGULAR 2 FUNDAMENTALS' MODULE BY JIM COOPER AND JOE EAMES
COMMENTS AND ADJUSTMENTS - CARSON SCHWALM
https://app.pluralsight.com/library/courses/angular-fundamentals



Getting Started
---------------
Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

To start the server, navigate to the project directory in cli: 
```
npm install
npm start
```

Login
---------------
johnpapa
password(not specific)


Additional References:
http://blog.angular-university.io/angular2-ngmodule/


PROJECT STRUCTURE

Project/
|-- app/		**Contains core Module, Component, and Routes
|   |-- common/		**Used to provide the entire app different modularized features and services
|	|-- errors/		**Error component for unexpected route/credentials
|	|-- events/		**Create/Validate, Get, Display the Events & Event List
|	|	|-- event-details/	**Individual event features (create sessions, details, upvote)
|	|	|-- shared/			**Pipes, Models, Services, & Validators for an event/event list
|	|
|	|-- nav/	   	**Component for the Top Nav bar, references search component
|	|-- user/		**Model, Service, and Components for User login/profile/authentication
|	|
|-- node_modules/		**Node modules and dependencies necessary to install for the application to run (npm i)
|-- index.html/			**This is the ONLY page in this SINGLE PAGE web application.  all components are dynamically rendered through this page
|
|-- styles.css 			**Basic stylings
|-- package.json 		**Project description, starting/watch/transpile scripts, and dependencies
|-- systemjs.config.js 	**Angular2 module dependencies, setting routes when referencing these modules
|-- tsconfig.json 		**Project options