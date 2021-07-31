const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
            
    posts: [
        {id: 1, message:'Privet Davl', likesCount:12},
        {id: 2, message:'salut eto Gulya', likesCount:10} 
    ],

    newPostText: 'guliko.com'

};        
    

export const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
        let newPost = { 
            id: 2,
            message: state.newPostText,
            likesCount: 10,
        };

         return {
              ...state,
              posts:[...state.posts, newPost],
              newPostText: ''
            };  
    }
        case  UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        default:{
         return state;
        }
    }
}

export const addPostActionCreator = () => ({type:'ADD_POST'}); 
export const updateNewPostTextActionCreator = (text) => ({ type:'UPDATE_NEW_POST_TEXT', newText: text });

export default  profileReducer;