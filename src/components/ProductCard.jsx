import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({product, onRatingSubmit}) => {
    return(
        <div className="product-card">
            <div>
                <img width={200} src={product.image} alt="" />
            </div>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>{product.avgRating} / 5
                    <br />
                    {product.totalRatings}
                </h4>
            </div>
            <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit}/>
        </div>
    )
}
export default ProductCard;