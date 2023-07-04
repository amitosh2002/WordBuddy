import logo from './logo.svg';
import './App.css';
import {TaskBar} from "./Modules/TaskBar";
import {TextForm} from "./Modules/TextForm";
import { useState } from 'react';
// import  Grammarly  from './Modules/Grammerly';
import { Grammarly } from '@grammarly/editor-sdk-react';
import Alert  from './Modules/Alert';
function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null)
 const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
 }
 const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#151414'
      setAlert("Dark mode enabled !","success")
      document.title="TextUtilies-Dark mode"
    }
    else{ 
      setMode('light') 
      document.body.style.backgroundColor='white'
      document.title="TextUtilies-light mode" 
      showAlert("Light mode enabled !","success")
    }
 }
  return (
    <div className="App">
      <TaskBar mode={mode} toogleMode={toogleMode}/>
        <TextForm mode={mode}/> 
       <Alert alert={alert}/>
       <Grammarly/>
    </div>
  );
}
export default App; 