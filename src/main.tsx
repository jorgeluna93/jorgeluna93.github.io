import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/bootstrap-grid.min.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
/*import UnderConstruction from './misc/UnderConstruction.tsx'*/
import MainPage from './blog/MainPage.tsx'
const theme = createTheme({
  palette: {
    mode:'dark'
  },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
      {/* <UnderConstruction></UnderConstruction> */}
    </ThemeProvider>
  </StrictMode>,
)
