import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies:[
                 {
                     id:1,
                     name: 'Kill Bill'
                 },
                 {
                     id:2,
                     name:'Django Unchained'
                 },
                 {
                     id:3,
                     name: 'Hateful Eight'
                 },
                 {
                     id:4,
                     name:'Pulp Fiction'
                 },
                 {
                     id:5,
                     name: 'Reservoir Dogs'
                 }
            ]
             }
        }
    
    render() {
        const moviesList=this.state.movies.map(movie => (
            <Movie key={movie.id} movieName={movie.name} />
        ))
        return (
            <div className='container'>
                <div className='card-deck'>
                    <div className='row'>
                        {moviesList}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList
