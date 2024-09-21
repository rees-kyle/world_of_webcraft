// JWT - JSON Web Tokens
// - popular method for securely transmitting information between parties as a JSON object
// - this information can be verified and trusted because it is digitally signed
// - can be signed using a secret:
    // - with the HMAC algorithm
    // - or a public/private key pair using RSA or ECDSA

// structure
// composed of three parts:
    // - header: consists of two parts; the type of token (JWT) and the signing algorithm (HMAC SHA256 or RSA)
    // - payload: contains the claims that are statements about an entity (typically the user) and additional data
    // - signature: to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way
// these parts are separated by dots and are base64-encoded strings (a method of converting binary data into a text string)

// example: 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// steps to create, sign and verify:
// 1. set up Node.js project; 'npm, init -y' in bash
// 2. install required packages; 'npm install express jsonwebtoken bcryptjs dotenv' in bash
// 3. set up express server
// 4. set up user registration endpoint
// 5. set up user login and JWT generation
// 6. setup middleware for protected routes
// 7. run server; 'node server.js' in bash

// testing (in bash):
// 1. registration endpoint:
/*
curl -X POST http://localhost:3000/auth/register \
   -H "Content-Type: application/json" \
   -d '{"username": "testuser", "password": "password123"}'
*/
// 2. login and JWT generation:
/*
curl -X POST http://localhost:3000/auth/login \
   -H "Content-Type: application/json" \
   -d '{"username": "testuser", "password": "password123"}'
*/
// 3. access to protected route:
/*
curl -X GET http://localhost:3000/protected \
   -H "Authorization: Bearer your_generated_jwt_token"
*/