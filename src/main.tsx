import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/bootstrap-grid.min.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import UnderConstruction from './misc/UnderConstruction.tsx'
//import MainPage from './blog/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MainPage /> */}
    <UnderConstruction></UnderConstruction>
  </StrictMode>,
)
