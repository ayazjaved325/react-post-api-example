import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {

const [title,setTitle]=useState(" ");
const [body,setBody]=useState(" ");
const [userId,setUserId]=useState(" ");
function saveUser()
{
  console.warn(title,body,userId);
  let data={title,body,userId}
  fetch("https://jsonplaceholder.typicode.com/posts",{
  method: 'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type' :'application/json'
  },
  body:JSON.stringify(data)

}).then((result)=>{
  console.warn("result",result);
})
}
  return (
    <div className="App">
    <h1>POST API METHOD</h1>

   <label>title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name="title"/> <br /> <br />

    <label>body </label>
    <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} name="body"/> <br /> <br />
    
    <label>userId </label>
    <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} name="userId "/> <br /> <br />

    <button type="button" onClick={saveUser} >Save New User</button>

    </div>
  );
}

export default App;
