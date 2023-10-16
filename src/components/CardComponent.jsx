import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Card.css'

const CardComponent = ({ movie }) => {

    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank'>
            <Card style={{ width: '14rem' }} className='movie-card bg-card text-white border-0 position-relative'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img-fluid w-100' />
                <Card.Body className='card-body position-absolute text-start bottom-0'>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                        <div className="movie-release-date">{movie.release_date}</div>
                        <div className="movie-rate">{movie.rate_average}</div>
                        <div className="movie-description">
                            {`${movie.overview.slice(0, 60)} ...`}
                        </div>
                    </Card.Text>
                    <div className="button-container text-center">
                        <Button className='btn-bg '>View Details</Button>
                    </div>
                </Card.Body>
            </Card>

        </a>
    )
}

export default CardComponent