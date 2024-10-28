import { createContext, useReducer } from "react";

export const contextProvider = createContext();
const initialState={
    data:null,
    loading:false,
    order:null,
    user:null,
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'getData':
            return{
                ...state, data:action.payload, loading:false
            };
        case 'loading':
                return{
                    ...state, loading:action.payload
                };
        case 'getOrder':
            return{
                ...state, order:action.payload, loading:false
            };
        case 'getUser':
            return{
                ...state, user:action.payload, loading:false
            }


        default: return state

    }
}

export const ContextData = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <contextProvider.Provider value={{...state, dispatch}}>
            {children}
        </contextProvider.Provider>
    )
}