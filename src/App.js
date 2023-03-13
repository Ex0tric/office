import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Page from "./Components/Page";
import Error from "./Components/Error";
// import ViewProduct from './Components/ViewProduct';
import AddProduct from './Components/AddProduct';
import ManageProduct from './Components/ManageProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand fw-bold">CRUD</Link>
            <div className="null"> 
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/add' className="nav-link">Add Product</Link>
                </li>
                <li className="nav-item">
                  <Link to='/manage' className="nav-link">Manage Products</Link>
                </li>
                <li className="nav-item">
                  <Link to='/page' className="nav-link">Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />
        <Route path='/add/' element={<AddProduct/>} />
        <Route path='/manage' element={<ManageProduct/>}/>
        <Route path='/page' element={<Page/>}/>
        {/* <Route path='/view' element={<ViewProduct/>}/> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
