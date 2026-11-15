import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import JobPortalGate from'./job-portal/JobPortalGate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JobPortalGate>
      <App />
    </JobPortalGate>
  </React.StrictMode>,
)
