import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING, UPDATE_ITEM } from '../actions/actionType';
let init = {
    items: [],
    isLoading: false
}

export default function itemReducer(state = init, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        // case UPDATE_ITEM:
        //     return {
        //         ...state,
        //         items: state.items.filter(item => item._id !== action.payload.id), ...action.payload
        //     }

        case ITEM_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;

    }

}