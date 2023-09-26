# Netflix GPT
    - Create React App
    - Configured TailwindCSS
    - Header 
    - Routing of App
    - Login Form
    - SignUp Form
    - Form Validation
    - useRef Hook

# Features 
    - Login/Sign Up
        - Sign In /Sign up Form
        - redirect to Browse Page
    - Browse (after authentication)
        - Header
        - Main Movie
            - Tailer in Background
            - Title & Description
            - MovieSuggestions
                - MovieLists * N
    - NetflixGPT
        - Search Bar
        - Movie Suggestions


# Firebase Setup 
    - firebase Login and created project
    - npm install firebase
    - created "firebase.js" file in utils folder and added "Firebase configuration" code provided in the documentation 
    - Install Firebase CLI
        - npm install -g firebase-tools
    - In Authentication need to enable Email/password 
    - Deploy to firebase hoisting
        - firebase login - i will take to another page for gmail confirmation
        - firebase init
            - Selected Option -- Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            - Use an existing project --> Selected the "SK-Netflix-GPT" Project
            - What do you want to use as your public directory? --> "build"
            -  Configure as a single-page app (rewrite all urls to /index.html)? --> No
            - Set up automatic builds and deploys with GitHub? --> No
            ==> Then "firebase.json" and ".firebaserc" files have created
    - Before Deploying we have to build our project using 
        - npm run build