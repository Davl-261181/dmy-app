const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
               
    users: [
        /*{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOORnpvA1jc6cfxalz0E4ZyvCJzoECga3Zow&usqp=CAU', 
        followed: false, fullName:'Davlet', status:'I am a boss', location: {city:'Ashgabat', country:'Turkmenistan'} },
        {id: 2, photoUrl: '', 
        followed: true, fullName:'Guliko', status:'I am a pretty', location: {city:'Ashgabat', country:'Turkmenistan'} }, 
        {id: 3, photoUrl: '', 
        followed: true, fullName:'Redman', status:'I am a man', location: {city:'Kiyev', country:'Ukraine'} },
    */],

};        
    

export const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                //users:[...state.users],
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
           
        case UNFOLLOW:
            return {
                ...state, 
                //users:[...state.users],
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
    
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users] }
        }   

        default:
            return state;
        
    }
}

export const followAC = (userId) => ({type:'FOLLOW', userId }); 
export const unfollowAC = (userId) => ({ type:'UNFOLLOW', userId });
export const setUsersAC = (users) => ({ type:'SET_USERS', users });

export default  usersReducer;