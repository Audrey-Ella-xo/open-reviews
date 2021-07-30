import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 10px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    
    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        margin-top: auto;
    }
`
const RatingTitle = styled.div``

const ReviewForm = (props) => {
    
    const ratingOptions = [5,4,3,2,1].map((score, index) => {
        return (
            <div>
                <input 
                    type='radio' value={score} name='rating' 
                    onChange={() => console.log('selected:',score)}
                    id={`rating-${score}`}
                />
                <label></label>
            </div>
        )
    })
    return (
        <div className='wrapper'>
            <form onSubmit={props.handleSubmit}>
                <div className=''>Have an experience with {props.attributes.name}? share your review</div>
                <div className='field'>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className='field'>
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className='field'>
                    <RatingContainer>
                        <div className ="rating-title-text">Rate this Airline</div>
                        <RatingBox>
                            {ratingOptions}
                        </RatingBox>
                        
                    </RatingContainer>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm