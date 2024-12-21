export default function Contact() {
  return (
    <div className="contact-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://i.pinimg.com/736x/2f/2e/b0/2f2eb0b6b6c7e1fd11d8dc3d6e9eedc2.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">Nama Lengkap: IMELDA NOVIANTY </h1>
        <p className="profile-title">JURUSAN - APA WEE KEPO</p>
        <p className="profile-hobby">Hobi: MENGHAYALLL</p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h2 className="contact-title">Contact Information</h2>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> <a href="mailto:youremail@example.com">ihanhoheng@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+6281234567890">+62 812 3456 7890</a>
          </li>
          <li>
            <strong>Address: BUSAN,korea selatan</strong> 
          </li>
          <li>
            <strong>Socials:</strong>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
