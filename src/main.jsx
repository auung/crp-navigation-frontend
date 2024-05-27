import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import MapContextProvider from "./contexts/MapContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapContextProvider>
      <App />
    </MapContextProvider>
  </React.StrictMode>,
)
