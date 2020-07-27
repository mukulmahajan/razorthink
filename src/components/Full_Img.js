import React, { useState, Fragment } from 'react';
import axios from 'axios';

const Full_Img=(props)=>{


    function download(){
        axios.get(props.img_link,
    {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.png'); 
        document.body.appendChild(link);
        link.click();
    })
          .catch(err => {
            console.log(err);
          });
      };
    
      function getData(){

        
        
        }  

    return (

            <dialog
            className="dialog"
            style={{ position: 'absolute' }}
            open
            onClick={getData}
            >
            <div><a href="#"
        download
        onClick={download}>download</a>
            </div>
            
                <img
              className="image"
              src={props.img_link}
              onClick={getData}
              alt="no image"
              
            /> 
            
          </dialog>
        )
    

};
export default Full_Img;