
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProjectsDetails from './Components/ProjectsDetails';
import Blogs from './Components/Blogs';
import Home2 from './Components/Home2';

function App() {
  return (

    <div className='bg-[#0a192f]'>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home2></Home2>}></Route>
        <Route path="/projects/:id" element={<ProjectsDetails></ProjectsDetails>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>

  );
}

export default App;
