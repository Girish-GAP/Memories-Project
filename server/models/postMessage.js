import mongoose from "mongoose";

//Using Schemas we can define the blueprint of document stored in database
const postSchema = mongoose.Schema({
     title : String,
     message : String,
     creator : String,
     tags : [String],//Array of Strings
     selectedFile : String, //Converting an image into String using react-file-base64
     likeCount : {
        type:Number,
        default:0
     },
     createdAt : {
        type : Date,
        default : new Date()
     }
})

//Converting Schema into Model
const postMessage = mongoose.model('postMessage',postSchema)

//On this postMessage we can run the commands like find , update , delete later on
export default postMessage;
