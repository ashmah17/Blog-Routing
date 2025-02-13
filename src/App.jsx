
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Blogs from './Component/Blogs';
import Home from './Component/Home';
import BlogDetails from './Component/BlogDetails';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Blogs' element={<Blogs/>} />
       <Route path='/BlogsDetails/:id' element={<BlogDetails/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
