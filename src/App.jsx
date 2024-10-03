import './App.css';
import Footer from"./components/footer";
import About from './pages/About';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login" 
import SignUp from"./pages/Signup"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import Panier from './pages/Panier';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
    <AuthProvider>

      <Router>
           <Routes> 
            <Route path="/home" exact element={<Home />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/About" exact element={<About />} />
            {/* <Route path="/login" exact element={<Login />} /> */}
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/" exact element={<Login />} />
            <Route path="/createProduct" exact element={<CreateProduct />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} /> 
            <Route path="/panier" element={<Panier />} /> 



           </Routes> 
          
      </Router>
      </AuthProvider>

      <Footer/>
    </div>
       );
}



export default App;
