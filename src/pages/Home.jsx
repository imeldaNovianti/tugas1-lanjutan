import { Star, ShoppingCart, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-300 to-blue-400">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold">Welcome to the Flower World</h1>
        <p className="mt-4 text-lg">Explore a variety of beautiful flowers and gifts!</p>
      </div>

      {/* Best Seller Products Section */}
      <div className="text-center mb-12">
        <h2 className="font-semibold">Best Seller Products</h2>
        <p className="text-gray-800 mt-2">Discover our most popular flower arrangements</p>

        <div className="flex-container">
          {/* Product Card 1 */}
          <div className="card">
            <img 
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_available_from_28/v1/Raw/110719_overview" 
              alt="Best Seller 1" 
            />
            <h3>Rose Bouquet</h3>
            <p>A beautiful bouquet of fresh roses, perfect for any occasion.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-green-600">$30.00</span>
              <button className="btn-green">
                <ShoppingCart size={28} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="card">
            <img 
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_available_from_28/v1/Raw/110287_overview" 
              alt="Best Seller 2" 
            />
            <h3>Tulip Bouquet</h3>
            <p>Bright and colorful tulips for a fresh, lively look.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-green-600">$35.00</span>
              <button className="btn-green">
                <ShoppingCart size={28} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="card">
            <img 
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product400s/t_overlay_available_from_28/v1/Raw/106247_overview" 
              alt="Best Seller 3" 
            />
            <h3>Orchid Arrangement</h3>
            <p>Elegant orchids arranged to brighten up any space.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-green-600">$50.00</span>
              <button className="btn-green">
                <ShoppingCart size={28} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

{/* Review Section */}
<div className="mb-12">
  <h2 className="text-center font-semibold mb-4">Customer Reviews</h2>
  <div className="reviews-flex justify-center gap-6">
    {/* Review Card 1 */}
    <div className="review-card p-4 w-full max-w-xs bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4" // Foto profil bulat
        />
        <div>
          <span className="font-semibold text-gray-800">Jane Doe</span>
          <div className="flex mt-1">
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"The flowers were absolutely gorgeous! I received them on time, and the bouquet was fresh and vibrant. I highly recommend this store!"</p>
      <span className="text-sm text-gray-600">- Jane Doe</span>
    </div>

    {/* Review Card 2 */}
    <div className="review-card p-4 w-full max-w-xs bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4" // Foto profil bulat
        />
        <div>
          <span className="font-semibold text-gray-800">John Smith</span>
          <div className="flex mt-1">
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"I ordered the Orchid arrangement for my mother, and she loved it. The packaging was perfect, and the delivery was seamless. Excellent service!"</p>
      <span className="text-sm text-gray-600">- John Smith</span>
    </div>
  </div>
</div>
{/* Review Section */}
<div className="mb-12">
  <div className="reviews-flex justify-center gap-6">
    {/* Review Card 1 */}
    <div className="review-card p-4 w-full max-w-xs bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4" // Foto profil bulat
        />
        <div>
          <span className="font-semibold text-gray-800">Jane Doe</span>
          <div className="flex mt-1">
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"The flowers were absolutely gorgeous! I received them on time, and the bouquet was fresh and vibrant. I highly recommend this store!"</p>
      <span className="text-sm text-gray-600">- Jane Doe</span>
    </div>

    {/* Review Card 2 */}
    <div className="review-card p-4 w-full max-w-xs bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4" // Foto profil bulat
        />
        <div>
          <span className="font-semibold text-gray-800">John Smith</span>
          <div className="flex mt-1">
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
            <Star size={20} className="text-yellow-500" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"I ordered the Orchid arrangement for my mother, and she loved it. The packaging was perfect, and the delivery was seamless. Excellent service!"</p>
      <span className="text-sm text-gray-600">- John Smith</span>
    </div>
  </div>
</div>

      {/* Promotional Section */}
      <div className="bg-yellow-200 p-6 text-center mb-12">
        <h2 className="font-semibold">Special Promo - 10% Christmas Collection</h2>
        <p className="mt-2">Hurry up! Limited time offer. Use code <strong>FLOWER10</strong> at checkout.</p>
        <p className="mt-2">Brighten up the holidays with our radiant Christmas range – enjoy free delivery and share the joy with those who matter most! <strong>FLOWER10</strong> at checkout.</p>

        <Link to="/shop" className="mt-4 inline-block text-white bg-green-600 p-3 rounded-lg">Shop Now</Link>
      </div>

      {/* Photo Gallery Section */}
      <div className="text-center">
        <h2 className="font-semibold mb-4">Photo our Christmas Collection</h2>
        <div className="flex-container">
          {/* Gallery Image 2 */}
          <div className="gallery">
            <img
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/111465_standing"
              alt="Flower 2"
            />
          </div>
          <div className="gallery">
            <img
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/111471_standing"
              alt="Flower 2"
            />
          </div>

          <div className="gallery">
            <img
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110463_standing"
              alt="Flower 2"
            />
          </div>


          <div className="gallery">
            <img
              src="https://res.cloudinary.com/serenata-commerce-limited/image/upload/f_auto,q_auto/t_Product600s/v1/Raw/110741_standing"
              alt="Flower 2"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
