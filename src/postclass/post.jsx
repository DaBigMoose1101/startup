import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Post({id}){
    const [posts, setPosts] = React.useState(JSON.parse(localStorage.getItem("posts")) ||[]);
    const [photo, setPhoto] = React.useState("AddPhotoHere.jpg");
    const [description, setDescription] = React.useState("Description of post here");
    const [likes, setLikes] = React.useState(0);
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState("");
    const [author, setAuthor] = React.useState("")
    const [Id, setId] = React.useState(0)
    let postObject = {
        postId: Id,
        postlikes: likes,
        postDescription: description,
        postPhoto: photo,
        postComments: comments,
        postAuthor: author
    };

    React.useEffect(()=>{
        let Post = posts.find(post => post.postId === id);
        setPhoto(Post.postPhoto)
        setLikes(Post.postlikes)
        setComments(Post.postComments);
        setDescription(Post.postDescription);
        setAuthor(Post.postAuthor);
        setId(Post.postId);
    })

    const [hasClickedLike, setHasClickedLike] = useState(false);

    function addComment() {
        if(newComment.trim() !== ""){
            setComments([newComment,... comments]);
            setNewComment("");
            localStorage.setItem(JSON.stringify());
        }

    }

    function clickLike() {
        setHasClickedLike(!hasClickedLike);
        setLikes(hasClickedLike ? likes - 1 : likes + 1);
        localStorage.setItem(JSON.stringify(postObject));
    }

    function getComments(){
        
    }

    return(
        <div className="post">
                      <img alt="post" src={photo} />
                      <div className="postReact">
                        <div className="commentBlock">
                            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Type Comment Here"/>
                            <Button type="react" className="btn btn-primary btn-sm" onClick={getComments}>View Comments</Button>
                        </div>
                        <div className="buttons">
                            <Button type="react" className="btn btn-primary btn-sm" onClick={clickLike}>Love It</Button>
                            <Button type="react" className="btn btn-primary btn-sm" onClick ={addComment}>Comment</Button>
                        </div>
                      </div>
                      <p className="username">{author}</p>
                      <p>{Description}</p>
                  </div>
    );
}