import StarRating from "./StarRating";

function Reviews({reviews}){

    return(
        <div className="reviews">
            <h2>Ratings and Reviews</h2>
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <hr/>
                    <div>
                    <span><strong>{review.reviewerName}</strong></span>
                    <StarRating rating={review.rating} />
                    <span className="review-date">{new Date(review.date).toDateString()}</span>
                    {/* <p>{review.rating}</p> */}
                    </div>
                    <p>{review.comment}</p>
                </div>
                )
            )}
        </div>
    )
}

export default Reviews;