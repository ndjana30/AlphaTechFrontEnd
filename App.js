import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './screens/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);