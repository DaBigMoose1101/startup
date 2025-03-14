import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import post from '../post.post';

export function feed(user){
const allPosts = Json.parse(localStorage.getItem('posts'));
const friends = Json.parse(localStorage.getItem('friends'));
const [feedOrder, setFeedOrder] = React.useState([]);

React.useEffect(()=>{
    posts = allPosts.filter(post => post.author === user);
},[])


return(
    <div>{post}</div>
);

}