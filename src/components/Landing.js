import React from 'react';

const Landing=(props)=>{
    return (
        <div className="row1">
                <img src={props.rowData.urls.small} alt="noimage" className="row2" onClick={()=>{
                    props.handleClick(props.rowData.urls.small)

                } }/>
           </div>
    )

};
export default Landing;