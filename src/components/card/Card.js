import React from 'react';
import PropTypes from 'prop-types'


const Card = ({ movie }) => {


    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={movie.Poster} alt={movie.Title} width="100" className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">Year {movie.Year}</p>
                </div>
            </div>
        </div>

    );

}


Card.PropTypes = {
    movie: PropTypes.shape(
        {
            Title: PropTypes.string,
            Year: PropTypes.string,
            Poster: PropTypes.string

        }).isRequired
}

export default Card;