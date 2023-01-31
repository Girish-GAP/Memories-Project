import express from "express";
import { getPosts , createPost , updatePost , deletePost , likePost} from "../controllers/posts.js";//Here .js extension is mandatory

const router = express.Router();

router.get('/',getPosts)
router.post('/',createPost)
router.patch('/:id',updatePost) //patch is used for updating Existing Documents
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)
 
export default router;