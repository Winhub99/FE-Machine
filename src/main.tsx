import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThirdQuestion from './components/ThirdQuestion.tsx'
import FifthQuestion from './components/FifthQuestion.tsx'
// import MainComponent from './components/fifthQuestion/MainComponent.tsx'
import Stopwatch from './components/sixthQuestion/Stopwatch.tsx'
import SeventhQuestion from './components/sixthQuestion/SeventhQuestion.tsx'
import Eight from './components/eightQuestion/Eight.tsx'
import NinthQuestion from './components/NinthQuestion.js'
import MainComponent from './components/TenthQuestion/MainComponent.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ThirdQuestion/> */}
    {/* <FifthQuestion/> */}
    {/* <MainComponent/> */}
    {/* <Stopwatch/> */}
    {/* <SeventhQuestion/> */}
    {/* <Eight/> */}
    {/* <NinthQuestion dataType="text" /> */}
    {/* <NinthQuestion dataType="number" /> */}
  <MainComponent/>
  </React.StrictMode>,
)
