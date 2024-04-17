
import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import FileUpload from './components/FileUpload';




function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/'
        
      </Routes>
    </div>

     
    
  );
}

export default App;
