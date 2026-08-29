import StarRating from "./StarRating";
import moment from 'moment';

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
                    <span className="review-date">{moment(review.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
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