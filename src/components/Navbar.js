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
        isOpen:false,
        index:0,
        nextindex:6
    });
    
 const {Uri,isOpen,index,nextindex} =image;

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
    setImage({index:0,
    nextindex:6});

    }
    function handleSubmitkey(event){
        if(event.key==='Enter'){

        
        const url="https://api.unsplash.com/search/photos?page=1&query="+photos+"&client_id="+clientID;
        axios.get(url)
        .then((response)=>{
            console.log(response);

            setResult(response.data.results);

    })}

    setImage({index:0,
        nextindex:6});
    }
    
    
    function getData(rowData){
        
        setImage({Uri:rowData,
            isOpen: !isOpen,
            index:index,
            nextindex:nextindex});
        }
    function onLoadMore(){
        setImage({
            index:nextindex,
            nextindex:nextindex+6
        })
        
    }   
    
    
    
    return (
        <Fragment>

    
        <nav>
            

            <div className='row3'>
                <input onChange={handleChange} 
                className="row4" 
                type="text" name="photo"
             placeholder="Search for photos..."
             onKeyPress={handleSubmitkey}
             />
      <button onClick={handleSubmit} type="submit"><i className="fa fa-search"></i></button>
      </div>
            
      </nav>
      

      <div className="row0">
           
          
          { 
            result.slice(index,nextindex).map((photos,i) => 
            (
            <Landing rowData={photos} key={i} handleClick={getData} />
               )
               )
               
           }
           
        </div>
        <div className="row5">
        <button onClick={onLoadMore} type="submit" >Load More</button>
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