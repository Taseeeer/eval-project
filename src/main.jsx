import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundry from './components/error-boundry/error-boundry'
import { AppProvider } from './context/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </AppProvider>
  </React.StrictMode>,
)
