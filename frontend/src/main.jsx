import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="916323161805-ou423jkdi5pmftn30rindgfg08bn6f9q.apps.googleusercontent.com ">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
)
