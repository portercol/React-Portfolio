import React from "react";

function Project(props) {
    return (
        <>
        <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
            <a data-click={props.name} href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img} className="card-img-top" alt={props.name}></img>
            </a>
            
        </div>
      </>
    )
}

export default Project;