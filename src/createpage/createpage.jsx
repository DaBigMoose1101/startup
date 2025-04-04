import React from 'react';
import './create.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function CreatePage({addPage, user}) {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState(null);
    const [description, setDescription] = React.useState('');

    function createPage(){
      const page = {
        name: name,
        photo: photo,
        description: description
      }
      addPage(page);
      navigate('/pages');
    }

  return (
    <main>
          <table>
            <thead>
            <tr>
              <th>Your Pages</th>
              <th>Create Page</th>
              <th>Recommended</th>
            </tr>
            </thead>
            <tbody>
            <tr>
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
                      <input id="photo" type="file" accept="img/*" onChange={(e)=>setPhoto(e.target.value)}/>
                    </div>
                    <div>
                      <label htmlFor="name">Page Name: </label>
                      <input id="name" type="text" placeholder="Enter Page Name" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="description">Page Description: </label>
                      <textarea id="description" name="pagedescription" rows="6" cols="50" placeholder="Description" 
                      onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                      <button onClick={createPage}>Create Page</button>
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