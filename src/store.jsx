import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const authenInitState = {
    isAuthen : false,
    facebookID : "",
    name : "Anonymous User"
}

const reducer = (state = authenInitState,action) => {
    switch (action.type) {
        case 'USER_LOGIN' :
            return {...state,
                        isAuthen : true,
                        facebookID : action.payload.facebookID,
                        name : action.payload.name
                   }
        case 'USER_LOGOUT' :
            return {...state, ... authenInitState}
          
    }

    return state
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)    
)