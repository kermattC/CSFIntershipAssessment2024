# Description
I used the dog api https://dog.ceo/dog-api/. I used this to allow the user to select a dog breed, and a number of pictures for the selected breed.
The form has 3 different fields - there is a text field for the username, two dropdown menus - one for selecting the dog breed and another for selecting the number of pictures for the desired breed, and an email field which serves as a prototype if the user wants to save their session.
When the form is submitted, the data is sent to the backend and saved on MongoDB (see screenshot below for example)
The backend is complete (past the 2 hour mark), but the 3 functions (POST, GET, GET/:id) work. However I did not implement a way to see them on the webpage, as the only way to test it is through postman.

This assessment was written using JavaScript, React, Redux and React-Bootstrap for the frontend. For the backend, the server was written using Node.js, Express for the routes and MongoDB for the data store. **I have also set up an environment variable to connect to my MongoDB database that has been .gitignore'd.** I'll send the file over to the recruiter in my email response.

# Limitations
There are some limitations that I was not able to fix during the 2 hours. 
1) Number of dogs restricted to 1: Although I implemented a dropdown menu that allows you to pick up to 5 pictures of a dog breed, Irealized too late that the api didn't support 5 random pictures of a specific breed. Rather it was x random pictures of random breeds
2) Dogs with 2 words (e.g. german shepherd) does not work. The documentation isn't clear on how to use the api for dog breeds with two words and I tried flipping things around but to no luck
3) I spent a bit too much time on the frontend, so I only have the core functionality of the backend. As a result I don't have a aesthetically pleasing way of presenting the results
4) The design is not complete

# What can be improved
- Better error checking for fields, both in the front-end and back-end
- Improve styling
- Functionality for re-submitting. Currently, the form can be submitted more than once, but the dog picture is only updated the first time
- Fixing bugs, such as the API call only being registered once. This is done to prevent an additional API call being made whenever the form is submitted, which may be due to incorrect use of the useEffect hook
- Notify the user of what is happening via feedback when the form is successfully submitted, as well as any type of errors. Can be implemented via toasts.

# What can be extended
- Routes (via React Router) for other pages, such as viewing submission details
- Verification for retrieving submission details. For example, a separate tab will appear if a user is logged in, and an additional one if the user is logged in as admin. The user can view their own past submissions and the admin can view all. The login functionality can be implemented using JWT's and refresh tokens

# How application and api should be deployed
After building the application, it can be deployed on cloud platforms such as AWS or Google Cloud. I am familiar with AWS, where I can use S3 storage via static web page hosting to host the web application. 

# Before running, need to install packages
- in this directory AND in the client directory, install packages:
> npm install

# How to run
- in this directory, simply run:
> npm run dev
- please note that the react app will be hosted on localhost:5173 and the Node.js server will be hosted on localhost:3001

Below are some screenshots of the functionality of the application
## MongoDB screenshot
![image](https://github.com/kermattC/CSFIntershipAssessment2024/assets/34190286/17052494-1480-4622-833d-d2ab4c05095f)

## Web app Screenshot (/POST)
![image](https://github.com/kermattC/CSFIntershipAssessment2024/assets/34190286/03e5bdbe-1229-4c9f-a4a2-051a1e370f07)

## Postman Screenshot (/GET)
![image](https://github.com/kermattC/CSFIntershipAssessment2024/assets/34190286/a70e5b2d-3997-40ff-959e-08510e8cff85)

## Postman Screenshot (/GET/:id)
![image](https://github.com/kermattC/CSFIntershipAssessment2024/assets/34190286/2c3c0219-3f2e-4634-badf-8b0cc3977dee)

