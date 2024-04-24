import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-dv3sh8p3kh5xgbjl.us.auth0.com"
    clientId="XylEnnLrm1S1lrhz1OkSfLYzFwXzQzjC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <BrowserRouter> 
 
    <App />
   
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
