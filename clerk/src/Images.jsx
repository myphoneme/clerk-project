import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = ["Technology", "Travel", "Food", "Sports"];

const CategoryList = () => {
    const [images, setImages] = useState({});

    useEffect(() => {
        const fetchImages = async () => {
            let newImages = {};
            for (let category of categories) {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/random?query=${category}&LZtHeo0UlXGLGWO710wmfk-czsyz4dJSbgSmz7Wsgcw=_ARJS4E3NJ7vivjrxQiqNgiQyf-F83Djjf-67wWT-m0`
                );
                newImages[category] = response.data.urls.small;
            }
            setImages(newImages);
        };

        fetchImages();
    }, []);

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {categories.map((category, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                    <img
                        src={images[category] || "https://via.placeholder.com/150"}
                        alt={category}
                        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
                    />
                    <h3>{category}</h3>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
