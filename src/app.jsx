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
  const [username, setUsername] = React.useState(localStorage.getItem('username') || '')
  const authState = username ? true : false;
  const [authorized, setAuthorized] = React.useState(authState);
  function addPost(newPost){
    setPosts([...posts, newPost]);
    
  }

  function authorize( username){
    setUsername(username);
    setAuthorized(true);

  }

  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setAuthorized(false);
  
  }

  React.useEffect(()=>{
    const defaultPosts = [{
    id: 1,
    likes: 0,
    description: "description",
    photo: "PostPlaceHolder1.jpg",
    comments: [],
    author: "lee"},
    
      {
        id: 1,
        likes: 0,
        description: "description",
        photo: "PostPlaceHolder1.jpg",
        comments: [],
        author: "joe"}
  ];
  setPosts(defaultPosts);
},[])
  
  const [posts, setPosts] = React.useState([]); 
  return (
    
    <BrowserRouter>
  <header>
        <nav>
          {authorized ? (
          <menu>
            <div className="nav-item"><NavLink className="nav-link" to="home">Home</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="recipes">Recipes</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="meals">Find-A-Meal</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="pages">Pages</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="profile">Profile</NavLink></div>
            <div className="nav-item"><NavLink className="nav-link" to="" onClick={logout}>LogOut</NavLink></div>
          </menu>
        ) : null}

        </nav>
      </header>
      <Routes>
      <Route path='/' element={<Login authorize={authorize} />}  exact />
      <Route path='/home' element={<Home posts={posts}/>}/>
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/meals' element={<Meals />} />
      <Route path='/pages' element={<Pages />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createmeal' element={<CreateMeal />} />
      <Route path='/createpage' element={<CreatePage />} />
      <Route path='/createpost' element={<CreatePost addPost={addPost} />} />
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