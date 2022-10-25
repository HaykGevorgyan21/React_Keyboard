import { useState } from 'react';
import './App.css';
import Keyboard from './KeyboardList';
function App() {

  const [keyboards, setKeyboards] = useState(Keyboard)
const [span, setSpan] = useState('')
const [uupercase, setuppercase]= useState(true)
  let keydata= keyboards.map((el,i)=>{
    return(<div key={i} className='btk_keyboard' onClick={()=>{
      if(el.button === 'back'){
        setSpan(span.slice(0, span.length-1))
      }else if(el.button === 'Enter'){
        alert('your code Saved...')
      }else if(el.button === 'shift' || el.button === 'SHIFT'){ if(uupercase){
        keyboards.forEach(element => {
          return element.button = element.button.toString().toLocaleUpperCase()
         }); setuppercase(false)  
      }else{
        keyboards.forEach(element => {
          return element.button = element.button.toString().toLocaleLowerCase()
         }); setuppercase(true)  
      }
      }else if(el.button !=='undefined'){
          setSpan(span+el.button.toString())
        }
        console.log(uupercase)
      console.log(el.button)
    
    }}>{el.button.toLocaleUpperCase()}</div>)
  })



  return (
    <div className="App" tabIndex={0} onKeyUp={(e)=>{
console.log(e.keyCode)
    }}>
           <div className='text'><input value={span} placeholder='Your resultate...'></input></div>
     <div className='keyboard_bar'>{keydata}</div>
    </div>
  );
}

export default App;
