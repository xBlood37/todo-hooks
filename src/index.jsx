import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/App'

const todoApp = ReactDOM.createRoot(document.querySelector('.todoapp'))

todoApp.render(<App />)
