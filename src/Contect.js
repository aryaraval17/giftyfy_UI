import React from "react";

function Contect() {
  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundImage: "url('https://c1.wallpaperflare.com/preview/562/436/978/market-merchandise-shop-souvenir.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <header className="bg-info shadow-sm py-5 text-center">
        <h1 className="fw-bold text-primary mt-4">Contact Us 📞</h1>
        <p className="lead text-secondary mt-3">
          We'd love to hear from you! Reach out for inquiries, orders, or support.
        </p>
      </header>

      <section className="py-5 flex-grow-1">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-lg h-100 bg-info bg-opacity-75 text-dark">
                <div className="card-body">
                  <h4 className="fw-bold mb-3 text-dark">Send us a message</h4>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Send Message</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-lg h-100 bg-warning bg-opacity-75 text-dark">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Our Shop</h4>
                  <p className="mb-2">📍 123 Gift Street, Ahmedabad, India</p>
                  <p className="mb-2">📧 info@giftshop.com</p>
                  <p className="mb-4">📞 +91 98765 43210</p>
                  <h5 className="fw-bold">Opening Hours</h5>
                  <ul className="list-unstyled">
                    <li>Mon - Fri: 9 AM - 8 PM</li>
                    <li>Sat: 10 AM - 6 PM</li>
                    <li>Sun: Closed</li>
                  </ul>
                  <a
                    href="https://www.google.com/maps/place/Ahmedabad,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mt-3"
                  >
                    Locate Us on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white bg-opacity-75 shadow-sm py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0 text-secondary">© 2026 Arya's Gift Shop | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Contect;
