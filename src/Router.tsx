import { Routes, Route } from 'react-router-dom';
import APOD from "./pages/apod";
import Home from './pages/Home';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
function RouterDOM() {
    return (

      <Routes>
        <Route path="/earth" element={<Earth/>}/>
        <Route path="/apod" element={<APOD />}/>
        <Route path='/mars' element={<Mars/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    );
  }
  export default RouterDOM;