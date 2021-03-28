import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {
    const url="/login";
    const allRoll=[]
    const [data,setData]=useState({
        name:"",roll:""
    })
    const [data1,setData1]=useState({
        name:"",roll:""
    })
    const [state,setState]=useState([])
    const [print,setPrint]=useState("");

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
       

        
    }

    function submit(e){
        e.preventDefault();
        var OPTIONS = {
            url: "http://localhost:4000/api",
            method: "POST",
            data:{name:data.name},
            headers: {
              "content-type": "application/json",
            },
          }

        axios(OPTIONS).then(res=>detail(res))
        .catch(err=>console.log(err));
    
    }


    
    function detail(res){
        // setPrint(res.data.message);
        console.log(res.data)
        document.getElementById('roll').innerHTML=res.data.input; 
        document.getElementById('status').innerHTML=res.data.message; 
         // setState((items)=>{
         //    console.log(...items);
         //    return [...items,print];
         // })    

           
    }
    


    
  return (
    <div className="centerDiv">
    
    
    
    <form onSubmit={(e)=>submit(e)}>
    <input id="name" type="text" onChange={(e)=>handle(e)}  />
    <button type="submit" >Submit</button>
    <table id="details">
   
  <tr>
    <th>Roll-Number</th>
    <th>Status</th>
  </tr>
  <tr>
    <td id="roll"></td>
    <td id="status"></td>
   
  </tr>
    </table>
    </form>
    
    </div>
  );
}





export default App;
