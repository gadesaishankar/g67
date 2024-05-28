
import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import UploadPDF from './components/UploadPDF';





function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/uploadpdf" element={<UploadPDF/>}/>
        
        
      </Routes>
    </div>

     
    
  );
}

export default App;
