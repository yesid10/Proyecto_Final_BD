import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import AppRouter from './routes/AppRouter.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
)
