import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App'
import { GlobalStyles } from './src/style/global-styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={{}}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
)
