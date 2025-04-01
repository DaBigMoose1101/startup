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

  const [posts, setPosts] = React.useState([]);
  
  
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

  async function loginOrCreate(endpoint, userName, password) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      setAuthorized(true);
      setUsername(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
      setAuthorized(true);
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
        props.onLogout();
      });
  }

  

  React.useEffect(()=>{
    fetch('/api/posts')
    .then((response) => response.json())
    .then((posts) =>{
      setPosts(posts);
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
      <Route path='/' element={<Login authorize={loginOrCreate} />}  exact />
      <Route path='/home' element={<Home posts={posts}/>}/>
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/meals' element={<Meals />} />
      <Route path='/pages' element={<Pages />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createmeal' element={<CreateMeal />} />
      <Route path='/createpage' element={<CreatePage />} />
      <Route path='/createpost' element={<CreatePost addPost={addPost} user={username} />} />
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