import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/actionTypes';

export default (posts = [], action) => {
    switch(action.type){

        case UPDATE :
            return posts.map((post) => 
                posts._id === action.payload._id ? action.payload : post
            )

        case DELETE :
            return posts.filter((post) => 
                post._id !== action.payload
            );
        

        case FETCH_ALL : 
            return action.payload;

        case CREATE : 
            return [ ...posts, action.payload];

        default:
            return posts;
    }
}


/*

    const reducer = (state, action) => {
        if(action.type == 'CREATE'){
            return aciton
            // state return by action
            return ...
        }
    }

*/