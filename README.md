### Demo
URL: https://searchgithubuserinfo.netlify.app

<p align="center">
<a href="https://user-images.githubusercontent.com/42184833/119205822-fe686200-bab6-11eb-977d-c4c44d019e04.png" target="_blank">
<img src="https://user-images.githubusercontent.com/42184833/119205822-fe686200-bab6-11eb-977d-c4c44d019e04.png" width="90%" /> 
<a/>
</p>

## **Features**  

-   **Authentication**

	1.  Sign up
	2.  Login
	3.  Forgot Password using email  
    
	4.  Logout

-   **user info**

	1.  Search GitHub user using GitHub API
	2.  Show user profile

		- Avatar

		- Name  

		- Username / Github Id  

		- Bio  

		- Blog URL / Website  

		- Location

  
	3. User Repo

		- Total Repo, Gists and Followers Count

		- Name (on click open github repo page)

		- Description  

		- language  

		- Star count  

		- Watch count

		- Heart icon for add to favorite

	4. add or remove repo in favorite

  

## **Technologies**
1.  React 16.13.1
2.  React Dom 16.13.1
3.  React Router Dom 5.2.0
4.  React Toasttify 7.0.4
5.  Axios 0.21.1
6.  React Bootstrap 1.6.0
7.  Bootstrap 4.6.0

## **How to Use**

    git clone https://github.com/DIp15739/github-search.git
    cd github-search
    npm install

 - ### **Firebase**
	 - Create
		 - Create Firebase Project
		 - Start Authentication with Email
		 - Start Cloud Firestore
		 - Copy config from Project settings
	
	- Setup in project
		- Create `.evn.local` file and add all data</br>
***REACT_APP_FIREBASE_API_KEY*** = apiKey value </br>
***REACT_APP_FIREBASE_AUTH_DOMAIN*** = authDomain value </br>
***REACT_APP_FIREBASE_DATABASE_URL*** = databaseURL value</br>
***REACT_APP_FIREBASE_PROJECT_ID*** = projectId value </br>
***REACT_APP_FIREBASE_STORAGE_BUCKET*** = storageBucket value </br>
***REACT_APP_FIREBASE_MESSAGING_SENDER_ID*** = measurementId value </br>
***REACT_APP_FIREBASE_APP_ID*** = appId value </br>
 
 - ### **In the project directory**

	### `npm start`

	Runs the app in the development mode.  
Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.

	The page will reload if you make edits.  
You will also see any lint errors in the console.

	### `npm test`

	Launches the test runner in the interactive watch mode.  
See the section about  [running tests](https://facebook.github.io/create-react-app/docs/running-tests)  for more information.

	### `npm run build`

	Builds the app for production to the  `build`  folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

	The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

	See the section about  [deployment](https://facebook.github.io/create-react-app/docs/deployment)  for more information.