import './App.css';
import MainRoutes from './MainRoutes/MainRoutes';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  const [count, setCount] = useState(1)

  
  useEffect(()=>{
    if(count===1){
      navigate("/")
    }
    if(count===2){
      navigate("/workSpaceInfo")
    }
    if(count==3){
      navigate("/EdenPlan")
    }
    if(count==4){
      navigate("/LastPage")
    }
  },[count])

  const nextPage=()=>{
    if(count<4){
      setCount(count+1)
      console.log('count: ', count);
    }
      
  }

  const prevPage=()=>{
    if(count>=2){
      setCount(count-1)
      console.log('count: ', count);
    }
  }

    

  return (
    <div className="App">
      <div onClick={prevPage} className="leftIcon">
        <i  className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="mainContainer">
        <MainRoutes />
      </div>
      <div onClick={nextPage} className="rightIcon">
        <i  className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default App;
