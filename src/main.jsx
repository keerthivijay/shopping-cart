import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/Store.jsx'
import { ThemeContext, ThemeProvider } from './components/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {
  registerSW({ immediate: true });
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)
