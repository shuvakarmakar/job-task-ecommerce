import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products', error));
    }, []);

    const handleAddToCart = (productId) => {
        console.log(`Added product with ID ${productId} to cart`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                    <img src={product.image} alt={product.productName} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-lg text-black font-semibold mb-2">{product.productName}</h3>
                    <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                    <p className="text-gray-700">{product.description}</p>
                    <button
                        onClick={() => handleAddToCart(product.id)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
