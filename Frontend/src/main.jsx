import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter> 
{/* <StrictMode> */}
<div className='dark:bg-slate-900 dark:text-white'>

 <App />
</div>
{/* </StrictMode>, */}
 </BrowserRouter> 
  
)
