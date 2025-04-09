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
import {likeNotifier} from './postclass/likeNotifier';


export default function App() {
  const [userName, setUsername] = React.useState(localStorage.getItem('userName') || '');
  const authState = userName ? true : false;
  const [authorized, setAuthorized] = React.useState(authState);

  const [posts, setPosts] = React.useState([]);
  const [meals, setMeals] = React.useState([]);
  const [pages, setPages] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  
  
  async function addPost(newPost){
    const response = await fetch('/api/post', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPost)
    }); 
    if(response.ok){
      setPosts([newPost,...posts])
    }
  }

  async function addRecipe(newRecipe){
    const response = await fetch('/api/recipe', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRecipe)
    }); 
    if(response.ok){
      setRecipes([newRecipe,...recipes])
    }
  }

  async function addPage(newPage){
    const response = await fetch('/api/page', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPage)
    }); 
    if(response.ok){
      setPages([newPage,...pages])
    }
  }

  async function addMeal(newMeal){
    const response = await fetch('/api/meal', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newMeal)
    }); 
    if(response.ok){
      setMeals([newMeal,...meals])
    }
  }

  

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        setAuthorized(false);
      });
  }

  React.useEffect(()=>{
    fetch('/api/posts')
    .then((response) => response.json())
    .then((posts) =>{
      setPosts(posts);
    });
    fetch('/api/recipes')
    .then((response) => response.json())
    .then((recipes) =>{
      setRecipes(recipes);
    });
    fetch('/api/pages')
    .then((response) => response.json())
    .then((pages) =>{
      setPages(pages);
    });
    fetch('/api/meals')
    .then((response) => response.json())
    .then((meals) =>{
      setMeals(meals);
    });
},[])

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
      <Route path='/' element={<Login authorize={(response, username)=>{
        setAuthorized(response);
        setUsername(username);
        likeNotifier.connect(username);
        } }/>}  exact />
      <Route path='/home' element={<Home posts={posts} likeNotifier={likeNotifier}/>}/>
      <Route path='/recipes' element={<Recipes recipes={recipes} />} />
      <Route path='/meals' element={<Meals meals={meals}/>} />
      <Route path='/pages' element={<Pages pages={pages}/>} />
      <Route path='/profile' element={<Profile user={userName}/>} />
      <Route path='/createmeal' element={<CreateMeal addMeal={addMeal} user={userName} />} />
      <Route path='/createpage' element={<CreatePage addPage={addPage} user={userName} />} />
      <Route path='/createpost' element={<CreatePost addPost={addPost} user={userName} />} />
      <Route path='/createrecipe' element={<CreateRecipe addRecipe={addRecipe} user={userName} />} />
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