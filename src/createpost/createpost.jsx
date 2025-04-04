import React from 'react';
import './create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function CreatePost({addPost, user}) {
    const navigate = useNavigate();
    const [description, setDescription] = React.useState();
    const [photo, setPhoto] = React.useState();
  
    function createPost(){
    const newPost = {
      id: 1,
      likes: 0,
      description: description,
      photo: "./AddPhotoHere.jpg",
      comments: [],
      author: user};

      addPost(newPost);
      navigate('/home');
  }

  return (
    <main>
          <table>
            <thead>
            <tr>
              <th>Your Pages</th>
              <th>Create Post</th>
              <th>Recommended</th>
            </tr>
            </thead>
            <tbody>
            <tr >
              <td id="side">
            
                <div>Page A</div>
                <div>Page B</div>
                <div>Page C</div>
                <div>Page D</div>
  
              </td>
              <td >
                    
                      <div>
                        <img alt="imgplaceholder" src="./AddPhotoHere.jpg" />
                      </div>                    
                      <div>
                        <label htmlFor="photo">Photo: </label>
                        <input id="photo" type="file" accept="img/*" onChange={(e) => setPhoto(e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="description">Post Description: </label>
                        <textarea id="description" name="postdescription" rows="6" cols="50" placeholder="What's on your mind?" onChange={(e) => setDescription(e.target.value)}></textarea>
                      </div>
                      <div>
                        <button onClick={createPost}>Create Post</button>
                      </div>
                 
                
                </td>
                <td id="side">

                  <div>Meal A</div>
                  <div>Meal B</div>
                  <div>Meal C</div>
                  <div>Meal D</div>

                </td>
            </tr>
            </tbody>
          </table>
        </main>
  );
}