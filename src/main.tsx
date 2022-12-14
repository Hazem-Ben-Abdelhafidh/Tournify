import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from "react-redux"
import { store } from './app/store'
ReactDOM.createRoot
  (document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
