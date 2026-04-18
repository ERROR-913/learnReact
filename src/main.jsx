import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import raju from './Card.jsx'
import Use from './usestate.jsx'
import UseEffectComponent from './useEffect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card title="my card" />
    <Use />
    <UseEffectComponent />
  </StrictMode>,
)
