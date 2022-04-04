import { DELE_SV, GET_LISTSV, LOAD_SV, ADD_SV } from "../constant";

const initialState = {
    listStudent: [],
    loadingApi: false,
}

const reducer = (state=initialState, action) => {
    var newState;
    switch(action.type){
        case GET_LISTSV:
            newState = {...state, listStudent: [...action.payload]};
            break;
        case DELE_SV:
            let newList = [...state.listStudent];
            let index = state.listStudent.findIndex(student => student.id === action.payload);
            newList.splice(index, 1);
            newState = {...state, listStudent: [...newList]}
            break;
        case LOAD_SV:
            newState = {...state, loadingApi: action.payload};
            break;
        case ADD_SV:
            newState = {...state, listStudent: [...state.listStudent, action.payload]};
            break;
        default:
            newState = { ...state };
    }
    return newState;
}

export default reducer;