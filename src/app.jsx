import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { Meals } from './meals/meals';
import { Pages } from './pages/pages';
import { Profile} from './profile/profile';
import { CreateMeal } from './createmeal/createmeal';
import { CreatePage } from './createpage/createpage';
import { CreatePost } from './createpost/createpost';
import { CreateRecipe } from './createrecipe/createrecipe';
import { Search } from './search/search';
import { Nav } from 'react-bootstrap';

export default function App() {
  const map = new Map();
  const [posts, setPosts] = React.useState([]);
  const [feedOrder, setFeedOrder] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  
  React.useEffect(()=>{
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("feed",JSON.stringify(feedOrder));
    localStorage.setItem("friend", JSON.stringify(friends));
  })

  return (
    
    <BrowserRouter>
  <header>
        <nav>
          <menu>
            <div className="nav-item"><NavLink className="nav-link" to="home">Home</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="recipes">Recipes</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="meals">Find-A-Meal</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="pages">Pages</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="profile">Profile</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="">LogOut</NavLink></div>
          </menu>

        </nav>
      </header>
      <Routes>
      
      <Route path='/home' element={<Home />}/>
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/meals' element={<Meals />} />
      <Route path='/pages' element={<Pages />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/' element={<Login />}   exact />
      <Route path='/createmeal' element={<CreateMeal />} />
      <Route path='/createpage' element={<CreatePage />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/createrecipe' element={<CreateRecipe />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
      <footer>
      <span className="text-reset">Porter Nichols</span>
      <a href="https://github.com/DaBigMoose1101/startup">GitHub</a>
  </footer>    
  </BrowserRouter>
  );
  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }
      
}