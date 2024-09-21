// Oauth - Open Authorization

/*
- an open standard for access delegation
- commonly used to grant websites or applications limited access to user information without exposing user passwords
- allows third-party services to exchange data on a user’s behalf with the user's consent
*/

/*
key concepts:
- resource owner; the user who authorizes an application to access their account
- client; the application that wants to access the user's account
- authorization server; the server that issues access tokens to the client after authenticating the user
- resource server; the server that hosts the protected resources (APIs) and uses access tokens to grant access
*/

/*
example:
- authorization request; the user clicks "Login with GitHub" on the client application
- user authentication; the user is redirected to GitHub to authenticate
- authorization grant; GitHub asks the user to authorize the client application
- redirect with authorization code; after the user authorizes, GitHub redirects back to the client application with an authorization code
- access token request; the client application exchanges the authorization code for an access token
- access token response; GitHub responds with an access token
- API request; the client application uses the access token to request user data from GitHub's API
- API response; GitHub returns the requested user data
*/

/*
steps:
1. set up project:
    - initialize; 'npm init -y' in bash
    - install necessary packages; 'npm install express axios dotenv' in bash
    - create files; index.js and .env
2. configure Oauth provider: (GitHub in this example)
    a) register your application with GitHub:
        - login to GitHub
        - 'Settings' > 'Developer settings'
        - 'Oauth Apps' > 'New OAuth App'
        - fill in application details
    b) add 'Client ID' and 'Client Secret' to '.env' file
3. create the express server in 'index.js'
4. run the application by starting your server; 'node index.js' in bash
*/

/*
additional security:
- validate and sanitize all inputs
- use HTTPS to protect data in transit
- store sensitive information (like access tokens) securely
*/

/*
further enhancements:
- handle refresh tokens to keep the user logged in
- implement a logout functionality
- integrate with other OAuth providers if needed
*/