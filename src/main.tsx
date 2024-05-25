import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThirdQuestion from './components/ThirdQuestion.tsx'
import FifthQuestion from './components/FifthQuestion.tsx'
import MainComponent from './components/fifthQuestion/MainComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ThirdQuestion/> */}
    {/* <FifthQuestion/> */}
    <MainComponent/>
  </React.StrictMode>,
)
