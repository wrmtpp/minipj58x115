import { createStore, combineReducers } from 'redux'

const initialForm = {
    name: "",
    todo: "",
    no: 0,
    date: 0,
    img: ""
}
const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case "CHANGE_NAME": return { ...data, name: action.name }
        case "CHANGE_TODO": return { ...data, todo: action.todo }
        case "CHANGE_NO": return { ...data, no: action.no }
        case "CHANGE_DATE": return { ...data, date: action.date }
        case "CHANGE_IMG": return { ...data, img: action.img }
    }
    return data; 
}

const covidReducer = (covids = [], action) => {
    switch (action.type) {
        case "GET_COVIDS": return action.covids
        case "ADD_COVID": return [...covids, action.covid];
        case "DELETE_COVID" : return covids.filter( covid => +covid.id !== +action.id )
        case "UPDATE_COVID" : return covids.map(covid => {
            if (+covid.id === +action.id ){
                return action.covid
            }
            else
                return covid 
        })
    }
    return covids; 
}

const rootReducer = combineReducers({
    covids:covidReducer,
    form:formReducer,
})
export const store = createStore(rootReducer);