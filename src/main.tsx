import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import UnderConstruction from './misc/UnderConstruction.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnderConstruction />
  </StrictMode>,
)
