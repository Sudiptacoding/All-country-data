import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import GetCountryData from './Components/GetCountryData/GetCountryData';
import AllCountryData from './Components/AllCountryData/AllCountryData';
import Search from './Components/Search/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route path='/' element={<AllCountryData></AllCountryData>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
          <Route path='/country/:read' element={<GetCountryData></GetCountryData>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
