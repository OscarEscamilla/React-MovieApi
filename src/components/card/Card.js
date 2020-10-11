import React from 'react';



const Card = ({props}) => {


    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={props.Poster} alt={props.Title} width="100" className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.Title}</h5>
                    <p className="card-text">Year {props.Year}</p>
                </div>
            </div>
        </div>
    
    );
    
}


export default Card;