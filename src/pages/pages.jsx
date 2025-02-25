import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom';
import {useNavigate } from 'react-router-dom';

export function Pages() {
    const navigate = useNavigate();
  return (
    <main>
      <div className="page_Specific_Menu">
        <div className="search-container">
          <form id="search" method="get" onSubmit={() => navigate('/search')}>
            <span>search</span>
            <input type="text" placeholder="search" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
            <span>
            <Button variant="primary" onClick={() => navigate('/createpage')}>
              Create Page
            </Button>
            </span>
        </div><div className="page_Specific_Menu">
        <div className="search-container">
          <form id="search" method="get" onSubmit={() => navigate('/search')}>
            <span>search</span>
            <input type="text" placeholder="search" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
            <span>
            <Button variant="primary" onClick={() => navigate('/createmeal')}>
              Create Meal
            </Button>
            </span>
        </div>
          <table>
            <thead>
            <tr>
              <th>Your Pages</th>
              <th>Explore</th>
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
              <td  id="feed">
  
                    <div className="post">
                        <img alt="post1" src="./PostPlaceHolder1.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p className="username">Creator's username here</p>
                        <p>Description of post here</p>
                        
                    </div>
                
  
                    <div className="post">
                        <img alt="post2" src="./PostPlaceHolder2.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p className="username">Creator's username here</p>
                        <p>Description of post here</p>
                    </div>
                
                    <div className="post">
                        <img alt="post3" src="./PostPlaceHolder3.jpg"/>
                        <div className="postReact">
                          <button type="react" className="btn btn-primary btn-sm">Love It</button>
                          <button type="react" className="btn btn-primary btn-sm">Comment</button>
                        </div>
                        <p className="username">Creator's username here</p>
                        <p>Description of post here</p>
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