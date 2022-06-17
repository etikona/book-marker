import {Routes, Route} from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Plans from './components/Plans';
import Support from './components/Support';


function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
  <Route path="#" element={<Home></Home>}/>
  <Route path="/discover" element={<Discover></Discover>}/>
  <Route path="/blog" element={<Blog></Blog>}/>
  <Route path="/support" element={<Support></Support>}/>
  <Route path="/plans" element={<Plans></Plans>}/>
  <Route path="/login" element={<Login></Login>}/>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
