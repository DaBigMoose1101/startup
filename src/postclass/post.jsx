import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';


export function Post({post, key, notifier}){
    const [liked, setLiked] = React.useState(false);
    function likePost(){
        setLiked(prevLiked => !prevLiked);
        if(liked){
            notifier.notifyAuthor(post.author);
        }
        
    }
    return(
        <div className="post">
            <img alt="post" src={post.photo} />
            <div className="reactions">
                <Button variant="secondary" onClick={likePost}>Like</Button>
            </div>            
            <p className="username">{post.author}</p>
            <p>{post.description}</p>
        </div>
    );
}