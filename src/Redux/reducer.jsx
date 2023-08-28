import { POST_URL, GET_URL, OCULT_HISTORY } from "./action.jsx";

const initialState = {
    link : [],
    links : [],
    error : []
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_URL:
            return{
                ...state,
                link : action.payload
            }
        case GET_URL:
            return{
                ...state,
                links : action.payload
            }
            
        default:
            return {
                state
            };
    }
}

export default RootReducer