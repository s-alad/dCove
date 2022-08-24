const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const passport = require('passport');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./database/connection");


const {
    OAuth2Client,
  } = require('google-auth-library');

const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'postmessage',
);

app.post('/auth/google', async (req, res) => {
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);

    res.json(tokens);
});

app.post('/auth/google/refresh-token', async (req, res) => {
    const user = new UserRefreshClient(
        clientId,
        clientSecret,
        req.body.refreshToken,
    );
    const { credentials } = await user.refreshAccessToken(); // optain new tokens
    res.json(credentials);
})


app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log('Server is running on port'+port);
})