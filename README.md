# Good Deed
Good Deed is an online platform that connects passionate people and encourages collaboration on community building projects. We are a nonprofit, project-based social media network to fund and promote social impact projects through crowdsourcing. 

A user will be able to create an account and from there either join a project, develop a new project, or donate to any project whether in the form of money, materials, or time.

Each user -- donor or developer -- has an account with their profile consisting of the projects they have developed and donated to. Our numerical metrics of popularity is the number of projects and the impact made by a user, quantified by statistics from the projects the user has participated in.

## A user can:
- Register a profile
- Log in
- Edit their profile
- View other user's profile
- Create a project
- Add a project description to a new project
- Add a category to a new project
- Add information and requests to a new project
- View list of projects available
- Search a project
- Filter projects by category
- Participate in a project
- Donate to a project

## Documentation
Other Good Deed documentation like the Project Management Plan, System Requirements Specification, and Pitch Presentation can be found [here](https://github.com/timurgordon/good-deed-web/tree/master/project-documents).

## Local Setup
 
Start by cloning this repository to your local directory.
- git clone https://github.com/timurgordon/good-deed-web.git

The following steps require npm to be installed in your computer.

### Step 1: Install dependencies

- npm install 
installs dependencies such as cypress (for testing) and jsdoc(documentation) to node_modules from package.json

- npm install -g @aws-amplify/cli
installs Amplify Command Line Interface necessary to pull backend environment

### Step 2: Pull backend environment from AWS

- amplify pull --appId d165oymlwnu85 --envName master

After running this command, which pulls the backend environment from aws, you will be prompted to login to the Admin UI.
You should receive an email from amplify to set up your login credentials to access the backend resources for this project.

Warning: the link displayed on the command line that pops up in your browser to prompt you to login to Admin UI doesn't work in safari.
We've observed it working in firefox and chrome. 

Once pulled, Amplify CLI will prompt inputs for configuration. Input the following responses:

Choose your default editor: (choose any)
Choose type of app: Javascript
Javascript framework: react
Source directory path: src
Distribution directory path: build
Build command: npm run-script build
Start command: npm run-script start
Do you plan on modifying this backend: no.

After this, you should get the following success messaage, which means that the backend environment is locally set up and amplify is locally configured.
"Added backend environment config object to your project."

### Step 3: Deploy application on localhost
This step requires a simple command
npm start
Once run, the site will be deployed in your localhost and the browser will be launched.

### Important: Current site information
As the platform is under development, we've added authentication at the landing page. In order to view the current site, the user must register, verify their email, and sign in to the platform.

## Make Targets

- prod:
  - In order to build this project, you need to run the Makefile for both frontend and backend components of this project.  
- tests: 
  - Tests  will be executed through two ways. One, by visually checking deployed copy from Amazon Web Services (AWS). This will be carried through the AWS's Amplify service.                                                        If you need an access for that section please make a request. 
  - The other way to make tests is supported by the Cypress. An example for the tests can be seen [here](https://github.com/timurgordon/good-deed-web/blob/master/cypress/integration/authenticator_spec.js). Cypress will help this project with the visual aid it provides. The test created through this platform will create videos of the test being performed. The previous example test has this [video](https://github.com/timurgordon/good-deed-web/blob/master/cypress/videos/authenticator_spec.js.mp4). 
- dev_env:
  - This project uses AWS for deploying. Specifically through using Amplify, local development environments are integrated. On amplify there are two options to commit changes  to. Developers can chose to deploy for staging or master branch of the project. 
- docs:
  - The documentation for the project will be automated as well. For this purpose JSDoc is utilized in this project. The documentation will be created with every build under [this file](https://github.com/timurgordon/good-deed-web/blob/master/docs/index.html)
