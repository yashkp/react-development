import React from 'react'

function Movie({movieName}) {
    return (
        <div className='col-md-6 col-lg-4 mb-5'>
            <div className='card bg-light'>
                {/* process.env.PUBLIC_URL */}
                <img src={`/images/${movieName.toLowerCase().split(' ').join('_')}.jpg`} alt='something else' className='card-img-top'/>
                <div className='card-body'>
                    <h3 className='card-title'>{movieName}</h3>
                    <p>fnrgjntgjrn</p>
                </div>
            </div>
        </div>
    )
}

export default Movie
