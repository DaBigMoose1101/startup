const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

let users = [];
let posts = [];

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 3000;

apiRouter.post('/auth/create', async (req, res) =>{
    if(await findUser('email', req.body.email)){
        res.status(409).send({ msg: 'Existing user' });
    }
    else{
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.put('/auth/login',  async (req, res) => {
    const user = findUser(req.body.email);
    if(user){
        if(await bcrypt.compare(req.body.password, user.password)){
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({email: user.email})
        }
    }
    else{
        res.status(401).send('Unauthorized');
    }
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

 

  // all login required end points

apiRouter.post('/post/create', verifyAuth, (req, res)=>{
    const post = {
        id: req.body.id,
      likes: req.body.likes,
      description: req.body.description,
      photo: req.body.photo,
      comments: req.body.comments,
      author: req.body.author
    }
    posts.push(post);
});

apiRouter.get('/posts/posts', verifyAuth, (req, res) =>{
    return posts;
});



const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };

function setAuthCookie(res, authToken){
    res.cookie(authCookieName, authToken, {
        secure,
        httpOnly,
        sameSite
    });
}

async function createUser(email, password){
    const passwordHash = await bcrypt.hash(password);
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4()
    };

    users.push(user);
    return user;
}


function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});