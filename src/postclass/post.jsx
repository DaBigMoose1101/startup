import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';


export function Post({post, key, notifier}){
    const [liked, setLiked] = React.useState(false);
    async function likePost(){
        let newLiked = !liked;
        setLiked(newLiked);
        if(newLiked){
            await notifier.notifyAuthor(post.author);
            post.likes += 1;
        }
        else{
            post.likes -= 1;
        }
        
    }
    return(
        <div className="post">
            <img alt="post" src={post.photo} />
            <div className="reactions">
                <Button variant="secondary" onClick={likePost}>Like</Button><span>{post.likes}</span>
            </div>            
            <p className="username">{post.author}</p>
            <p>{post.description}</p>
        </div>
    );
}