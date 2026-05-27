import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Anniversary() {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm py-5 text-center">
        <h1 className="fw-bold text-success mt-4">Anniversary Collection 💕</h1>
        <p className="lead text-secondary mt-3">
          Celebrate love with elegant gifts and surprises.
        </p>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://m.media-amazon.com/images/I/61rDKqCvcnL._AC_UF894,1000_QL80_.jpg"
                  className="card-img-top"
                  alt="Anniversary Gift 1"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Anniversary Gift 1</h5>
                  <p className="text-muted">Elegant anniversary presents.</p>
                  <button className="btn btn-outline-success">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.zwende.com/cdn/shop/files/HES-couple_20cb7dbf-db57-4b44-99ba-37fc04748338.png?v=1712750898&width=900"
                  className="card-img-top"
                  alt="Anniversary Gift 2"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Anniversary Gift 2</h5>
                  <p className="text-muted">Elegant anniversary presents.</p>
                  <button className="btn btn-outline-success">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://assets.giftalove.com/resources/common/giftimages/largeimage/GL19021.jpg"
                  className="card-img-top"
                  alt="Anniversary Gift 3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Anniversary Gift 3</h5>
                  <p className="text-muted">Elegant anniversary presents.</p>
                  <button className="btn btn-outline-success">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.angroos.com/wp-content/uploads/2023/03/001-20-600x600-2.jpg"
                  className="card-img-top"
                  alt="Anniversary Gift 4"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Anniversary Gift 4</h5>
                  <p className="text-muted">Elegant anniversary presents.</p>
                  <button className="btn btn-outline-success">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white shadow-sm py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0 text-secondary">
            © 2026 Arya's Gift Shop | Designed with ❤️ using React & Bootstrap
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Anniversary;
