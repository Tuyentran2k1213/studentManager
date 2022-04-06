import { DELE_SV, GET_LISTSV, LOAD_SV, ADD_SV, EDIT_SV, UPDATE_SV } from "../constant";

const initialState = {
    listStudent: [],
    loadingApi: false,
    editStudent: {},
}

const reducer = (state=initialState, action) => {
    var newState;
    const { type, payload } = action;
    switch(type){
        case GET_LISTSV:
            newState = {...state, listStudent: [...payload]};
            break;
        case DELE_SV:
            let newList = [...state.listStudent];
            let index = state.listStudent.findIndex(student => student.id === payload);
            newList.splice(index, 1);
            newState = {...state, listStudent: [...newList]}
            break;
        case LOAD_SV:
            newState = {...state, loadingApi: payload};
            break;
        case ADD_SV:
            newState = {...state, listStudent: [...state.listStudent, payload]};
            break;
        case EDIT_SV:
            const newStateSv = [...state.listStudent];
            const indexSv = newStateSv.findIndex(stateSv => stateSv.id == payload);
            newState = {...state, editStudent: {...newStateSv[indexSv]}};
            break;
        case UPDATE_SV:
            const newListSv = [...state.listStudent];
            const indexStudent = newListSv.findIndex(sv => sv.id == payload.id);
            newListSv[indexStudent] = payload;
            newState = {...state, listStudent: [...newListSv]};
            break;
        default:
            newState = { ...state };
    }
    return newState;
}

export default reducer;