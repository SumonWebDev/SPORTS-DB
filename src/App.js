import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./styles.css";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export default function App() {
const [count,setCount]=useState([]);
const [search,setSearch]=useState([]);
const [clear,setClear]=useState('');
useEffect(()=>{
fetch(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`)
 .then(res=>res.json())
 .then(data=>{
   setCount(data.sports);
   //console.log(data);
    })
   })
    //search engine event handler
     const eventHandler=(e)=>{
        const searchWord=e.target.value;
        setClear(searchWord);
        const newFilter=count.filter((value)=>{
         return value.strSport.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord ===''){
          setSearch([])
        }else{
          setSearch(newFilter);
        } 
        };
        const clearInput=()=>{
         setSearch([]);
         setClear('');
        }
  return (
    <div className="App">
      <h3>Hellow Sports Buddy</h3>
      <div className='search'>
        <div className='search-input'>
        <input type='text' placeholder='Enter A Sport Name--' value={clear} onChange={eventHandler}/>
        <div className='search-icon'>
          {search.length === 0 ? <SearchIcon/> : <CloseIcon id='clearBtn' onClick={clearInput}/>}
          </div>
        </div>
        {search.length !==0 &&(
          <div>
           {
            search.map((item,key)=><Home key={key} item={item}></Home>)
           }
      </div>
      )}
    </div>
    </div>
  );
}
