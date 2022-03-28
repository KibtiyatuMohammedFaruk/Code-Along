import logo from './logo.svg';
import './App.css';

import writers from "./writers"
import  ProfileCard  from './ProfileCard';
import { useEffect, useState } from 'react';
import ProfileForm from './components/ProfileForm';

function App() {
  const [allprofile, setAllProfile] = useState([
    {
      firstName: "Kibtiya",
      lastName: "Faruk",
      email: "Faruk.kibtiya1@gmail.com",
      phone: "+23357881738",
    },
  ]);
  
  const submit = (profile) => {
    console.log(profile);
    const arr = allprofile;
    arr.push(profile);
    setAllProfile(arr);
  }
    return (
      <div>
        <h1>Writer Profiles</h1>
        <div className="container">
          <ProfileForm />
          {allprofile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer} />
          ))}
      </div>
     </div>
     );
          } 

export default App;
