import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card';

function App() {
 const [search, setSearch] = useState("");
 const [data, setData] = useState([]);
 const [result , setResult] = useState([])

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>res.json())
  .then((data)=>{
    setData(data)
  })
  .catch((err)=>{console.log("error")})
  },[])

  const handleClick = ()=>{
    const array  =[];
    data.map((el)=>{
      let res = el.title.trim().split(" ");
      res.map((elm)=>{
       if(search === elm){
        console.log(el)
        array.push(el)
        setResult(...result,array)
        // console.log(result)
       }
      })
    })
  };
  const searchData  =(el)=>{
    // console.log(el.target.value)
    setSearch(el.target.value)
  };
  
  return (
    <div className="App">
     <div>
      <input onChange={searchData} ></input>
      <button onClick = {handleClick} >click</button>
     </div>
    <div>
      {<Card value={result}/>}
    </div>
    </div>
  );
}

export default App;
