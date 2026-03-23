import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'

import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Addproducts from './Components/Addproducts'
import Getproducts from './Components/Getproducts'
import Mpesapayments from './Components/Mpesapayments';




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Beautify Cosmetics 💄</h1>
      </header>
      <nav>
      <Link to='/signup' className='btn btn-success text-white m-4 btn-outline-info'>SignUp</Link>
      <Link to='/signin' className='btn btn-success text-white m-4 btn-outline-info'>Signin</Link>
      <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Get Products</Link>
       <Link to='/Addproducts' className='btn btn-success text-white m-4 btn-outline-info'>Add Products</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/mpesa' element={<Mpesapayments/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

     
    
    </div>
      </Router>
  );
}

export default App;
