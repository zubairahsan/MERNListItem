import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEM_LOADING } from '../actions/actionType';
import axios from 'axios';


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then((res) => {
            dispatch(
                {
                    type: GET_ITEMS,
                    payload: res.data
                }
            )
        })
}


export const addItem = (data) => dispatch => {
    axios
        .post('/api/items', data)
        .then((res) => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })

}


export const updateItem = (data) => dispatch => {
    axios
        .put(`/api/items/${data.id}`, { name: data.name })
        .then((res) => {
            dispatch({
                type: UPDATE_ITEM,
                payload: res.data
            })
        })

}


export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then((res) => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })

}

const setItemsLoading = () => {
    return {
        type: ITEM_LOADING
    }
}