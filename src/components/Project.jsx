import React from "react";

function Project(props) {
    return (
        <>
        <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
            <a data-click={props.name} href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img} className="card-img-top" alt={props.name}></img>
            </a>
            <div className="card-title mt-3 mb-0">
                <h4>{props.name}</h4>
            </div>
        </div>
      </>
    )
}

export default Project;