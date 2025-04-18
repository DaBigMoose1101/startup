const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const { peerProxy } = require('./peerProxy.js');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('mealshare');
const userCollection = db.collection('users');
const postCollection = db.collection('posts');
const recipeCollection = db.collection('recipes');
const pagesCollection = db.collection('pages');
const mealsCollection = db.collection('meals');

const authCookieName = 'token';

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

apiRouter.post('/auth/create', async (req, res) =>{
    if(await getUser(req.body.email)){
        res.status(409).send({ msg: 'Existing user' });
    }
    else{
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.put('/auth/login',  async (req, res) => {
    const user = await getUser(req.body.email);
    if(user){
        if(await bcrypt.compare(req.body.password, user.password)){
            const token = uuid.v4();
            setAuthCookie(res, token);
            await userCollection.updateOne({email: user.email},{$set:{token: token}});
            res.send({email: user.email})
            return;
        }
    }
    res.status(401).send({'msg':'Unauthorized'}); 
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await getUserByToken(req.cookies[authCookieName]);
    if (user) {
      await userCollection.updateOne({email: user.email}, {$set:{token: ""}})
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

  apiRouter.get('/users', async (req, res) =>{
    const users = await getAllUsers();
    res.send(users);
  });

  // Default error handler
app.use(function (err, req, res, next) {
  console.log();
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile("index.html", { root: "public" });
});

const verifyAuth = async (req, res, next) => {
    const user = await getUserByToken(req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };

  // all login required end points

  apiRouter.get('user/auth', verifyAuth, (req, res) =>{
    res.status(200).send();
  });

  apiRouter.get('/user/posts', async (req, res) => {
    const result = await getProfilePosts(req);
    res.send(result? result: []);   
  });

  apiRouter.post('/post', verifyAuth, (req, res)=>{
    const post = {
        id: req.body.id,
        likes: req.body.likes,
        description: req.body.description,
        photo: req.body.photo,
        comments: req.body.comments,
        author: req.body.author
    }
    addPost(post);
    res.status(200).send();
});

  apiRouter.post('/recipe', verifyAuth, (req, res) =>{
    const recipe = {
     author: req.body.author,
      photo: req.body.photo,
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instuctions
    }
    addRecipe(recipe);
    res.status(200).send();

  });

  apiRouter.get('/recipes', async (req, res)=>{
    const recipes = await getRecipes();
    res.send(recipes);
  });

  apiRouter.post('/page', verifyAuth, (req, res) =>{
    const page = {
      name: req.body.name,
      photo: req.body.photo,
      description: req.body.description
    }
    addPage(page);
    res.status(200).send();
  });

  apiRouter.get('/pages', async (req, res) =>{
    const pages = await getPages();
    res.send(pages);
  });

  apiRouter.post('/meal', verifyAuth, (req, res) =>{
    const meal = {
      author: req.body.user,
        name: req.body.name,
        photo: req.body.photo,
        location: req.body.location,
        description: req.body.description,
        ingredients: req.body.ingredients
    }
    addMeal(meal);
    res.status(200).send();
  });

  apiRouter.get('/meals', async (req, res) =>{
    const meals = await getMeals();
    res.send(meals);
  });

  apiRouter.get('/posts', async (req, res) =>{
    const posts = await getPosts();
    res.send(posts);
  });

  async function createUser(email, password){
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4()
    };

    await addUser(user);
    return user;
  }

  async function getProfilePosts(req){
    const user = await getUserByToken(req.cookies[authCookieName]);
    const cursor = postCollection.find({author: user.email});
    const result = await cursor.toArray();
    return result;  
  } 

  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

  async function getUser(email) {
    return userCollection.findOne({ email: email });
  }

  async function getAllUsers(){
    const cursor = userCollection.find();
    const users = await cursor.toArray();
    return users;
  }
  
  async function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function addUser(user) {
    await userCollection.insertOne(user);
  }

  async function addPost(post) {
    await postCollection.insertOne(post);
  }

  async function addRecipe(recipe) {
    await recipeCollection.insertOne(recipe);
  }

  async function addPage(page) {
    await pagesCollection.insertOne(page);
  }

  async function addMeal(meal) {
    await mealsCollection.insertOne(meal);
  }

  async function getPosts() {
    const cursor = postCollection.find();
    const posts = await cursor.toArray();
    return posts;
}

async function getRecipes() {
  const cursor = recipeCollection.find();
  const recipes = await cursor.toArray();
  return recipes;
}

async function getMeals() {
  const cursor = mealsCollection.find();
  const meals = await cursor.toArray();
  return meals;
}

async function getPages() {
  const cursor = pagesCollection.find();
  const pages = await cursor.toArray();
  return pages;
}

  const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

peerProxy(httpService);
