import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCeUx3WmFZfV1gc19HYFZRTGYuP1ZhSXxQdkNhXX9ZcXRVTmRfV0E=');
// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
const container = document.getElementById('root');
const root = createRoot(container); 
root.render( <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
</React.StrictMode>);