import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import CreateBlog from './pages/CreateBlog';
import Blog from './pages/Blog'
import NotFound from './pages/NotFound';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/createBlog' element={<CreateBlog/>}/>
        <Route path='/:id' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
