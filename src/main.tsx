import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadingScreen from './LoadingScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>
)
