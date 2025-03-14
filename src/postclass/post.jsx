import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function post(id){
    const [photo, setPhoto] = useState("AddPhotoHere.jpg");
    const [description, setDescription] = useState("Description of post here");
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [author, setAuthor] = useState("")
    const [Id, setId] = useState(0)
    let postObject = {
        postId: Id,
        postlikes: likes,
        postDescription: description,
        postPhoto: photo,
        postComments: comments,
        postAuthor: author
    };

    React.useEffect(()=>{
        let posts = Json.parse(localStorage.getItem("posts"));
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
            setComments(comments.push(newComment));
            setNewComment("");
            localStorage.setItem(JSON.stringify(postObject));
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