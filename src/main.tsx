import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/app.scss'
import 'react-image-crop/src/ReactCrop.scss'
<script src="https://unpkg.com/react-image-crop/dist/ReactCrop.min.js"></script>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

