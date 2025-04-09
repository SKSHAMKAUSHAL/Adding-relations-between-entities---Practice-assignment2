import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [product, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, avgRating: ((p.avgRating * p.totalRatings + newRating) / (p.totalRatings + 1)).toFixed(1), totalRatings: p.totalRatings + 1 }
          : p
      )
    );
  };
 

  return (
    <div className="container">
     {/* code here */}
     <h1>Product Rating</h1>
     <div>
      {product.map((p) => (
        <ProductCard key={p.id} product={p} onRatingSubmit={handleRatingSubmit} />
      ))}
     </div>
    </div>
  );
}

export default App;