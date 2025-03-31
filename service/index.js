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

app.post('/auth/create', async (req, res) =>{
    if(await findUser('email', req.body.email)){
        res.status(409).send({ msg: 'Existing user' });
    }
    else{
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});





function setAuthCookie(res, authToken){
    res.cookie(authCookieName, authToken, {
        httpOnly,
        
    })
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