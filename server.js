const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./Controlers/register');
const signin = require('./Controlers/Signin');
const profile = require('./Controlers/profile');
const image = require('./Controlers/image');
const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Sahil@19-96@',
      database : 'smart_brain'
    }
  });


const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id', (req,res) => {profile.handleProfile(req,res,db)} )

app.put('/image', (req,res) => {image.handleImage(req,res,db)})

app.post('/imageUrl', (req,res) => {image.HandleApiCall(req,res)})





app.listen(3000, () => {
    console.log(`app is running on port ${3000}`);
})



