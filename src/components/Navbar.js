import React, { useState, Fragment } from 'react';
import Landing from './Landing';
import Full_Img from './Full_Img';
import axios from 'axios';
import {Link} from 'react-router-dom';

import  '../App.css';
const Navbar=(props)=>{
    const [photos,setPhotos] = useState("");
    const [clientID,setclientID]=useState("aIm_jtHHfMfKUpYQnUY28AdAW5BjGLxcxkYDpuAWavA");
    const [result,setResult]= useState([]);

    const [image,setImage]=useState({
        Uri:'',
        isOpen:false
    });
 const {Uri,isOpen} =image;

    function handleChange(event){
        setPhotos(event.target.value);

    }

    function handleSubmit(event){
        console.log(photos);
        const url="https://api.unsplash.com/search/photos?page=1&query="+photos+"&client_id="+clientID;
        axios.get(url)
        .then((response)=>{
            console.log(response);

            setResult(response.data.results);

    })

    }
    function handleSubmitkey(event){
        if(event.key==='Enter'){

        
        const url="https://api.unsplash.com/search/photos?page=1&query="+photos+"&client_id="+clientID;
        axios.get(url)
        .then((response)=>{
            console.log(response);

            setResult(response.data.results);

    })}

    }
    
    
    function getData(rowData){
        
        setImage({Uri:rowData,
            isOpen: !isOpen});
        }

    
    
    
    return (
        <Fragment>

    
        <nav>
            

            <div><input onChange={handleChange} type="text" name="photo"
             placeholder="Search for photos..."
             onKeyPress={handleSubmitkey}
             /></div>
      <div><button onClick={handleSubmit} type="submit">Search</button></div>
            
      </nav>
      
      <div className="row0">
           
          
          { 
            result.map((photos) => 
            (
            <Landing rowData={photos} key={photos.id} handleClick={getData} />
               ))
           }
          
       
        </div>




        {isOpen ? (        
            <Full_Img img_link={Uri}  />
            ) : (
            <Link to="/"></Link>
            )}
        

            

         
         </Fragment>
    )

};
export default Navbar;