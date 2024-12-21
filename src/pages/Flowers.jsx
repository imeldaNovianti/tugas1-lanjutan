import React, { useState } from "react";
import { Heart, ShoppingCart, Info, Search } from "lucide-react"; // Menggunakan ikon dari Lucide

const flowers = [
    { 
      id: 1, 
      title: "Rose", 
      image: "https://www.blooms247.co.uk/wp-content/uploads/2023/10/First-Lady.jpg", 
      genre: "Romantic", 
      description: "Beautiful red roses" 
    },
    { 
      id: 2, 
      title: "Tulip", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/111466_standing", 
      genre: "Spring", 
      description: "Bright tulips for gardens" 
    },
    { 
      id: 3, 
      title: "Orchid", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110752_standing", 
      genre: "Exotic", 
      description: "Elegant and delicate orchids" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://images.serenataassets.com/image/upload/f_auto/t_Product550s/v1/Raw/86304_standing.jpg?t=SLSM_86304", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110120_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://tse2.mm.bing.net/th?id=OIP.iX5O_l_vDVkFfCWruSwcfAAAAA&pid=ImgDet&w=159&h=159&c=7", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
    { 
      id: 4, 
      title: "Sunflower", 
      image: "https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110713_standing", 
      genre: "Cheerful", 
      description: "Bright yellow sunflowers" 
    },
  
  ];
export default function Flowers() {
  const [liked, setLiked] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price-asc"); // Default sorting: by price ascending

  const toggleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  const openModal = (flower) => {
    setSelectedFlower(flower);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFlower(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Sorting functions
  const sortFlowers = (flowers) => {
    let sortedFlowers = [...flowers];
    if (sortOption === "price-asc") {
      sortedFlowers.sort((a, b) => a.price - b.price); // Sort by price ascending
    } else if (sortOption === "price-desc") {
      sortedFlowers.sort((a, b) => b.price - a.price); // Sort by price descending
    } else if (sortOption === "name-asc") {
      sortedFlowers.sort((a, b) => a.title.localeCompare(b.title)); // Sort by name A-Z
    } else if (sortOption === "name-desc") {
      sortedFlowers.sort((a, b) => b.title.localeCompare(a.title)); // Sort by name Z-A
    }
    return sortedFlowers;
  };

  // Filter flowers based on search term
  const filteredFlowers = flowers.filter(flower => 
    flower.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flowers-container">
      <div className="search-sort-bar">
        {/* Search Input */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search flowers..." 
            value={searchTerm} 
            onChange={handleSearchChange} 
            className="search-input"
          />
          <Search className="search-icon" />
        </div>

        {/* Sorting Dropdown */}
        <div className="sort-container">
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)} 
            className="sort-select"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>

      {/* Flowers List */}
      <div className="flowers-grid">
        {sortFlowers(filteredFlowers).map((flower) => (
          <div key={flower.id} className="flowers-card">
            <img src={flower.image} alt={flower.title} />
            <h6>{flower.title}</h6>
            <p className="text-sm text-gray-500">{flower.genre}</p>
            <p>{flower.description}</p>
            <p className="font-bold">${flower.price}</p>

            <div className="flex justify-between items-center mt-4">
              <button className="add-to-cart-btn" aria-label="Add to Cart">
                <ShoppingCart />
              </button>

              <div className="flex items-center space-x-2">
                <Heart
                  className={`icon love-icon ${liked[flower.id] ? "text-red-500" : "#1A1A19"}`}
                  onClick={() => toggleLike(flower.id)}
                  aria-label="Like"
                />
                <Info
                  className="icon info-icon"
                  onClick={() => openModal(flower)}
                  aria-label="More Info"
                />
              </div>
            </div>

            {/* Buy Now Button */}
            <button className="buy-now-btn mt-4" aria-label="Buy Now">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for More Info */}
      {isModalOpen && selectedFlower && (
        <div className="fixed">
          <div className="bg-white">
            <h3>{selectedFlower.title}</h3>
            <img src={selectedFlower.image} alt={selectedFlower.title} />
            <p>{selectedFlower.description}</p>
            <p className="font-bold">${selectedFlower.price}</p>
            <button className="bg-red-500" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
