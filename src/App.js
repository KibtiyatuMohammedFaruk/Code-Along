import logo from './logo.svg';
import './App.css';

import writers from "./writers";
import  ProfileCard  from './ProfileCard';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({
    writers: [],
    loading: false,
  });

  const handleClick = () => {
    setData(prevData => ({
      ...prevData,
      loading: true,
    }))

      setTimeout(() => {
        const getWriters = async () => {
          const response = await fetch("/writers.json");
          const data = await response.json();
          setData({
            writers: data,
            loading: false,
          })
        // console.log(data);
        };
        getWriters();
      }, 2000);
    
  };
  console.log(data);

  if(data.loading) {
    return (
      <div>
        <h1>Writer Profiles</h1>
        <div className="container">
          <div className="card action">
            <p className="infoText"> Loading... </p>
          </div>
        </div>
      </div>
    )
  }

  return (
   <div>
     <h1>WRITER PROFILES</h1>
     <div className="container">
        {data.writers.length === 0 ? (
          <div className="card action">
            <p className="infoText"> Oops... no writer profile found</p>
            <button className="actionBtn" onClick={handleClick}>
              Get Writers
            </button>
            </div>
        ) : (
          data.writers.map((writer) => (
            <ProfileCard  writer={writer} />
          ))
        )}
      </div>
     </div>
     );
          } 

export default App;
