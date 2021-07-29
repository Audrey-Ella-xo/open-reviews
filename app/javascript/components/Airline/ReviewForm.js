import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const ReviewForm = (props) => {
    // const {name, image_url, avg_score} = props.attributes
    // const total = props.reviews.length
    return (
        <div className='wrapper'>
            <form onSubmit={props.handleSubmit}>
                <div className=''>Have an experience with {props.attributes.name}? share your review</div>
                <div className='field'>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className='field'>
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="Description" placeholder="Review Description"/>
                </div>
                <div className='field'>
                    <div className ="rating-container">
                        <div className ="rating-title-text">Rate this Airline</div>
                        [Star rating goes here]
                    </div>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm