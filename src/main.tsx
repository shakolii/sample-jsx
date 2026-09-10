import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './405-6-19/App1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App1 />
  </StrictMode>,
)
