import express from 'express';//For routing of Application
import bodyparser from 'body-parser';//Helps to send Requests
import cors from 'cors';//Used for Cross origin request
import mongoose from 'mongoose';//Used to create models of Post 
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express(); //Execution of App
dotenv.config()

//bodyparser Setup : to properly set up request
app.use(bodyparser.json({limit:'30mb',extended:true})); // because may be we are going to send the large images
app.use(bodyparser.urlencoded({limit:'30mb',extended:true}));

//Cors Setup
app.use(cors());

app.use('/posts',postRoutes) //Should be always below all setup

//Connection string with MongoDB Atlas
const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 3001;

//mongoose is used to connect to database

//{useNewUrlParser: true , useUnifiedTopology: true} is not required but used to avoid error and warning
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology: true})
.then(() =>{ app.listen(PORT , () => console.log(`Server is running on port : ${PORT}`))})
.catch((error) =>{console.log(error.message)})




