// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

const rootElement = document.getElementById("root"),
  root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
