import { useEffect, useState } from "react";

const RatingWidget = ({productId, onRatingSubmit}) => {

    const [rating, setRating] = useState(0);

    return(
        <div className="rating-stars">
            {[1, 2, 3, 4 , 5].map((star) => (
                <div key={star} onClick={() => setRating(star)}>
                    {rating >= star ? "★" : "☆"}
                </div>
            ))}
            <button onClick={() => rating && onRatingSubmit(productId, rating)}>Submit</button>
        </div>
    )
}
export default RatingWidget;