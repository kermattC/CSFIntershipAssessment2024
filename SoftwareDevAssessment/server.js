// set up for the server
// my API is written in form.cjs, and I use express for the endpoints
const UserRouter = require('./client/src/api/form.cjs')

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.VITE_MONGODB_URI)

console.log("Server's up")

app.use('/user', UserRouter)

// use whatever port is given in the environment variable. Not used in this case, but just wanted to do it for good practice. If there's no port specified then it'll just host at port 3001
const port = process.env.PORT || 3001
app.listen(port);