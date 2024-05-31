import { useState } from 'react'
import './App.css'
import ProgressBar from "./ProgressBar.jsx";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [progressColor,setProgressColor]  = useState("");

  function updateProgress(){
    progress < 100 ? setProgress(progress + 10) : null;
  }

  function resetProgress(){
    setProgress(0);
  }

  function changeProgressColor(){
    setProgressColor("red");
  }

  return (
    <div>
    <ProgressBar progress={progress} progressColor={progressColor} />
    <button id='updateButton' onClick={function(){updateProgress(); changeProgressColor()}}
    >Update Progress!</button>
    <button id='resetButton' onClick={resetProgress} >Reset Progress</button>
    </div>
  )
}
