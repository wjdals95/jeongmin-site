import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/portfolio'>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <App />
  </BrowserRouter>
);

