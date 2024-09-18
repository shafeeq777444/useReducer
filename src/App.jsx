//its used for for extra Type object for "forget spelling mistake"
import {useReducer} from 'react'
import './App.css'
import valueReducer,{Type} from './reducer'

const initialState={value:0}
function App() {
 const [state,dispatch]=useReducer(valueReducer,initialState)
  return (
    <div className='main-div'>

      <div className='display' style={{background:state.color}}><p className='display-value'>{state.value}</p></div>
      
      <div className='buttons'>
      <button onClick={()=>dispatch({type:Type.Counter_change,value:1})}>+</button>
      <button onClick={()=>dispatch({type:Type.Counter_change,value:-1})}>-</button>
      </div>
      <div  className="colors">
      <div onClick={()=>dispatch({type:Type.Color_change,value:"green"})} className='green'><p>GREEN</p></div>
      <div onClick={()=>dispatch({type:Type.Color_change,value:"blue"})} className='blue'><p>BLUE</p></div>
      </div>
    </div>
  )
}

export default App




/* //color change only
import {useReducer} from 'react'
import './App.css'

function valueReducer(prev,action){
  return {color:action}
}

function App() {
 const [state,dispatch]=useReducer(valueReducer,{color:'white'})
  return (
    <div className='main-div'>

      <div className='display' style={{background:state.color}}><p className='display-value'></p></div>
      
    
      <div  className="colors">
      <div onClick={()=>dispatch("green")} className='green'><p>GREEN</p></div>
      <div onClick={()=>dispatch("blue")} className='blue'><p>BLUE</p></div>
      </div>
    </div>
  )
}

export default App */
