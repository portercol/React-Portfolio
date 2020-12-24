// import React
import React from "react";

// create Project functional component using props
function Project(props) {

    // return data to the page using props
    // the properties will come from the projectData
    return (
        <>
        <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
            <a data-click={props.name} href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img} className="card-img-top" alt={props.name}></img>
            </a>
            <div className="card-title mt-3 mb-0">
                <h5>{props.name}</h5>
            </div>
            <hr/>
            <div className="card-body mt-0 pt-0">
                <p className="card-text mb-3">{props.description}</p>
                <p className="card-text" style={{color: "black"}}><strong>Technologies: </strong>{props.tech}</p>
            </div>
            <div className="row btn-group">
                <a data-click={props.name} href={props.repo} className="btn btn-dark mr-1 ml-3" target="_blank" rel="noopener noreferrer">View Repo</a>
                <a data-click={props.name} href={props.link} className="btn btn-dark ml-1 mr-3" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
        </div>
      </>
    )
}

// export Project component
export default Project;