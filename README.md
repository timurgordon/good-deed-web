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

## Make Targets


- prod:
  - In order to build this project, you need to run the Makefile for both frontend and backend components of this project.  
- tests: 
  - Tests  will be executed through two ways. One, by visually checking deployed copy from Amazon Web Services (AWS). This will be carried through the AWS's Amplify service.                                                        If you need an access for that section please make a request. 
  - The other way to make tests is supported by the .yaml file and further tests are currently being developed. 
- dev_env:
  - This project uses AWS for deploying. Specifically through using Amplify, local development environments are integrated. On amplify there are two options to commit changes  to. Developers can chose to deploy for staging or master branch of the project. 
- docs:
  - The documentation for the project will be automated as well. Since pydoc is not an option, the developers of this project are currently working on adding JSDoc or Docco, in order to create a .html file with the project components explained. 
