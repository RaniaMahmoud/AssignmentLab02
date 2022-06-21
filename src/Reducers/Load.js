const State = {
   
    isLoad:false
  
  };
  
  export default function Reducer_Load(state = State, action) {
    switch (action.type) {
   
       case "SET_LOADER":
        return {
          ...state,
          isLoad:action.payload
        }
      default:
        return state;
    }
  }