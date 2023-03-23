import React, { useState } from "react";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

import './index.css'

function App() {
  const [users, setUsers] = useState([])
  const [avatar, setAvatar] = useState('')
  return (
    <div className='app'>
      <h2 className="title">React Form App</h2>
      <Form users={users} setUsers={setUsers} setAvatar={setAvatar} avatar={avatar} />
      <Cards users={users} avatar={avatar} />
    </div>
    
  )
}

export default App;
