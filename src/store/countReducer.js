import { GET_COUNT_VALUE, INC_COUNT_VALUE, DEC_COUNT_VALUE } from './actionTypes';

const initialState = {
  count: 0
}

const CountReducer = function(state = initialState, action){
    switch (action.type) {
        case GET_COUNT_VALUE:
            console.log("Reducer GET_COUNT_VALUE");
            return state; 
          
        case INC_COUNT_VALUE:
            console.log("Reducer INC_COUNT_VALUE");
            return {...state, ...state.count=state.count+1}
    
        case DEC_COUNT_VALUE:
            console.log("Reducer DEC_COUNT_VALUE");
            if(state.count > 0)
              return {...state, ...state.count=state.count-1}
            else
             return state;
    
        default: {
          return state
        }
    } 
}
export default CountReducer;