
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProjectsDetails from './Components/ProjectsDetails';

import Home2 from './Components/Home2';
import Blog from './Components/Blog';

function App() {
  return (

    <div className='bg-[#0a192f] '>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home2></Home2>}></Route>
        <Route path="/projects/:id" element={<ProjectsDetails></ProjectsDetails>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>

  );
}

export default App;
