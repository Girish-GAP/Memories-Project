import * as api from '../../api/index'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({type : 'FETCH_ALL', payload : data});
    }catch(error){
        console.log(error.message);
    }
} 

// dispatch is coming from redux thunk
export const createPost = (post) => 
                            // another error function
                            async(dispatch) => {  // dispatch is coming from redux thunk

    console.log("Hello Dispatch");
    try{
        // we need to get the data // destructuring data from response
        const { data } = await api.createPost(post) // making post api request to backend server
        
        // after getting the data from backend 
        dispatch( {type : 'CREATE', payload : data});
    }catch(error){
        console.log(error);
    }


}