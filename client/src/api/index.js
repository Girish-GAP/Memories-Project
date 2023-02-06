import axios from "axios";

const url = "http://localhost:3001/posts";

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(  // newPost is the entire post
                                                    url // the end point
                                                    , newPost // the data we are sending
                                                );

export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
