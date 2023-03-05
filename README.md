# Authentication System By React Js
Many web applications are a mix of public and private pages. Public pages are available to anyone, while a private page requires a user login. You can use authentication to manage which users have access to which pages.

## Introduction
Your React application will need to handle situations where a user tries to access a private page before they are logged in, and you will need to save the login information once they have successfully authenticated.

In this project, you’ll create a React application using a id-based authentication system. You’ll create a mock API that will return a user token, build a login page that will fetch the token, and check for authentication without rerouting a user. If a user is not authenticated, you’ll provide an opportunity for them to log in and then allow them to continue without navigating to a dedicated login page. As you build the application, you’ll explore different methods for storing tokens and will learn the security and experience trade-offs for each approach. This project will focus on storing tokens in localStorage.

By the end of this project, you’ll be able to add authentication to a React application and integrate the login and token storage strategies into a complete user workflow.


## Screenshot
![home](https://user-images.githubusercontent.com/78297421/222465782-10b0bc55-d918-474d-b476-fb6f0c5cdf09.png)

![login](https://user-images.githubusercontent.com/78297421/222465829-7d5dc72b-385d-4050-9523-f5293815c78b.png)

![register](https://user-images.githubusercontent.com/78297421/222465868-9d94d7cd-0f56-4c85-9d42-b61115224323.png)

![restpassword](https://user-images.githubusercontent.com/78297421/222465919-491d4b9d-aded-4274-9ae0-8efadcd8729e.png)

![answerpassword](https://user-images.githubusercontent.com/78297421/222465957-b8bd2687-3e77-4d9e-a74e-47dbea1acf35.png)

![finishanswerpassword](https://user-images.githubusercontent.com/78297421/222465980-c32e812e-faf4-4e6f-b098-a2e62afb7e2d.png)



## Setup Project & Run Project
1- Clone This Repo :
#### `https://github.com/anwararcoder/ar-authentication-system-react-js.git`

2- Install NPM Package
#### `npm install`

3- Run NPM Package
#### `npm start`

4- Run Database Server
#### `npm run json-server` Or Open http://localhost:9000/users

3- Open Project
#### `http://localhost:3000`

## Features Of Authentication System
1-  Supports isomorphic / universal / server-side rendering

2-  Email authentication components, including:

3-  User registration

4-  Password resets

5-  Email sign in

6-  Bootstrap

7-  A plain theme that you can style from scratch

8-  Can be configured to work with any API

9-  This project comes bundled with a test app.

10- You can run the demo locally by following these instructions, or you can use it here in production.



**Note: Authentication is a crucial requirement of many applications. The mixture of security concerns and user experience can be intimidating, but if you focus on validating data and rendering components at the correct time, it can become a lightweight process. Each storage solution offers distinct advantages and disadvantages. Your choice may change as your application evolves. By moving your component logic into an abstract custom Hook, you give yourself the ability to refactor without disrupting existing components.**
