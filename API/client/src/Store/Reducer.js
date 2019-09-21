import initialState from "./AppState";

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'NAMECHANGE':
            return {
                ...state,
                name: action.val,
            };
        case 'EMAILCHANGE':
            return {
                ...state,
                email: action.val,
            };
        case 'USERNAMECHANGE':
            return {
                ...state,
                username: action.val,
            };
        case 'PASSWORDCHANGE':
            return {
                ...state,
                password: action.val,
            };
        case 'USERCREATED':
            return {
                ...state,
                createdUser: action.val
            };
        case 'RELOADPAGE':
            return {
                ...state,
                username: action.payload.username,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                createdOn: action.payload.createdOn,
                userId: action.payload.userId,
                createdUser: action.payload.createdUser
            };
    }

    return state;
};

export default reducer;