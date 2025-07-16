import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadingScreen from './LoadingScreen'
import { ThemeProvider } from './providers/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Analytics />
      <LoadingScreen />
    </ThemeProvider>
  </StrictMode>
)
