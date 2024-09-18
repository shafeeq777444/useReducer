/* //1st EXAMPLE:"with one dispatch value"
function valueReducer(prevState,action){
    switch (action) {
        case 'increment':
            return {
                ...prevState,value:prevState.value+1
            }
        case 'decrement':
                return {
                    ...prevState,value:prevState.value-1
                }
        case 'green':
                return {
                     ...prevState,color:'green'
                }   
        case 'blue':
                    return {
                         ...prevState,color:'blue'
                    }            
    
        default:
            break;
    }
  }
    
  export default valueReducer */
// 2nd EXAMPLE : in standered or good practice is passing object "dispatch inside an object"
const Type={
    Color_change:"color-change",          //its used for just remove spelling mistake its not used neccessory
    Counter_change:"counter-change"
  } 
function valueReducer(prevState,action){
    switch (action.type) {
        case Type.Counter_change:
            return {...prevState,value:prevState.value+action.value}
       
         case Type.Color_change:
            return {...prevState,color:action.value}
      
        default:
            return {...prevState}
    }
  }
  export default valueReducer
  export {Type}