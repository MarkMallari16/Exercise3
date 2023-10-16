import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardComponent = ({ movie }) => {
    return (
        <Card style={{ width: '18rem' }} className='bg-card text-white border-0'>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img-fluid w-100' />
            <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>
                    <div className="movie-release-date">{movie.release_date}</div>
                    <div className="movie-rate">{movie.rate_average}</div>
                    <div className="movie-description">
                        {`${movie.overview.slice(0,50)} ...`}
                    </div>
                </Card.Text>
                <Button className='btn-bg'>View Details</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent