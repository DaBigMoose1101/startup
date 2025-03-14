import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import post from '../postclass.post';

export function feed(user){
const allPosts = JSON.parse(localStorage.getItem('posts'));
const friends = JSON.parse(localStorage.getItem('friends'));
const [feedOrder, setFeedOrder] = React.useState([]);

React.useEffect(()=>{
    posts = allPosts.filter(post => post.author === user);
    setFeedOrder([posts])
},[])


return(
    <div>{post}</div>
);

}