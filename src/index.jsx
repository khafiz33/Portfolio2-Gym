// import functions
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import components
import App from './App';
const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)