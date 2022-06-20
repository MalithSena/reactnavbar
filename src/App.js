import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Consulting, Contactus, Design, Development, Home, Marketing, Products, Services, Signup, NoPage } from './pages';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      < Navbar />
        <Routes>
          <Route path="/" element={< Home/>}/>
          <Route path="/consulting" element={<Consulting />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/design" element={< Design/>}></Route>
          <Route path="/development" element={< Development/>}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/products" element={< Products/>}></Route>
          <Route path="/services" element={ < Services />}></Route>
          <Route path="/signup" element={< Signup/>}></Route>
          <Route path="*" 
            element={< NoPage />}/>
               
            
            
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
}

export default App;
