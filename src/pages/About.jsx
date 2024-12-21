export default function About() {
  const gallery = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/a3/3c/cf/a33ccf4eec6840cdbc6f50b603f8ce7d.jpg",
      title: "Elegant Orchids",
      description:
        "Discover the elegance of orchids that bring a touch of sophistication to any setting.",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/ce/52/07/ce52071c7e32860e132c43bb0f186871.jpg",
      title: "Colorful Tulips",
      description:
        "Bright and cheerful tulips that capture the essence of spring.",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/a7/df/68/a7df683a24605f73c39f9bcf2474a785.jpg",
      title: "Radiant Roses",
      description:
        "The timeless beauty of roses, perfect for expressing love and admiration.",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Title Section */}
        <h1 className="about-title">About Flower World</h1>
        <p className="about-description">
          At Flower World, we believe in the beauty of nature and its ability to bring joy and harmony into our lives. 
          Our mission is to deliver the freshest and most exquisite flowers to brighten your moments.
        </p>

        {/* Gallery Section */}
        <div className="about-gallery">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-item">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />
              <div className="gallery-info">
                <h2 className="gallery-title">{item.title}</h2>
                <p className="gallery-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
