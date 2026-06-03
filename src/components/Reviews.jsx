import StarRating from "./StarRating";

function Reviews({reviews}){

    return(
        <div className="reviews">
            <h2>Reviews</h2>
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <hr/>
                    <p>Name: {review.reviewerName}</p>
                    <p>Comment {review.comment}</p>
                    <p>Rating: {review.rating}</p>
                    <StarRating rating={review.rating} />
                </div>
                )
            )}
        </div>
    )
}

export default Reviews;