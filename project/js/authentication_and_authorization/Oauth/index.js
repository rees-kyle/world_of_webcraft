const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// home route - fix for 'Quirks Mode' by adding '<!DOCTYPE html>'
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GitHub OAuth</title>
      </head>
      <body>
        <h1>GitHub OAuth Example</h1>
        <a href="/auth/github">Login with GitHub</a>
      </body>
    </html>
  `);
});

// redirect to GitHub for authentication
app.get('/auth/github', (req, res) => {
  console.log('Redirecting to GitHub for authentication...');
  const redirect_uri = process.env.GITHUB_REDIRECT_URI;
  const client_id = process.env.GITHUB_CLIENT_ID;

  res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`);
});

// GitHub callback route
app.get('/auth/github/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Error: Missing authorization code');
  }

  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  try {
    // exchange the authorization code for an access token
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id,
      client_secret,
      code,
    }, {
      headers: { accept: 'application/json' }
    });

    if (!tokenResponse.data.access_token) {
      throw new Error('Error fetching access token');
    }

    const access_token = tokenResponse.data.access_token;

    // use the access token to request user information from GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${access_token}` },
    });

    // display user information
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User Information</title>
        </head>
        <body>
          <h1>User Info from GitHub</h1>
          <pre>${JSON.stringify(userResponse.data, null, 2)}</pre>
          <a href="/">Back to Home</a>
        </body>
      </html>
    `);

  } catch (error) {
    console.error('Error during authentication:', error.message);
    res.status(500).send('Error authenticating');
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
