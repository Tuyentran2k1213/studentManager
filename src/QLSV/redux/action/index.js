import { GET_LISTSV, DELE_SV, LOAD_SV, ADD_SV, EDIT_SV, UPDATE_SV } from "../constant";

export const getListSv = payload => ({
    type: GET_LISTSV,
    payload,
})

export const deleList = payload => ({
    type: DELE_SV,
    payload,
})

export const loadingProcess = payload => ({
    type: LOAD_SV,
    payload,
})

export const addToList = payload => ({
    type: ADD_SV,
    payload,
})

export const editSv = payload => ({
    type: EDIT_SV,
    payload
})

export const updateSv = payload => ({
    type: UPDATE_SV,
    payload
})