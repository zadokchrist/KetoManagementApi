import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import ViewPatient from './components/ViewPatient';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Users/Login';
import Register from './Pages/Users/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path='/layout' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
    // <ViewPatient/>

  );
}

export default App;
