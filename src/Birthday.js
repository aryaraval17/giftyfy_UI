import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Birthday() {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm py-5 text-center">
        <h1 className="fw-bold text-danger mt-4">Birthday Specials 🎉</h1>
        <p className="lead text-secondary mt-3">
          Make birthdays unforgettable with our curated gifts and cakes.
        </p>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.giftify.in/cdn/shop/files/image14_020b6bd4-c2d1-446c-ba72-a4f3188d7ac4.jpg?v=1685268013"
                  className="card-img-top img-fluid"
                  alt="Birthday Gift 1"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift for boy's</h5>
                  <p className="text-muted">Perfect for birthday celebrations.</p>
                  <button className="btn btn-outline-danger">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.angroos.com/wp-content/uploads/2022/12/001-26-600x600-1.jpg"
                  className="card-img-top img-fluid"
                  alt="Birthday Gift 2"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift for Girls</h5>
                  <p className="text-muted">Perfect for birthday celebrations.</p>
                  <button className="btn btn-outline-danger">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://confettigifts.in/cdn/shop/files/7_ef91434d-c3c6-48eb-94cc-360747e556f4.jpg?v=1757329822&width=1080"
                  className="card-img-top img-fluid"
                  alt="Birthday Gift 3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift for men's</h5>
                  <p className="text-muted">Perfect for birthday celebrations.</p>
                  <button className="btn btn-outline-danger">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://m.media-amazon.com/images/I/818NENM1RWL._AC_UF894,1000_QL80_.jpg"
                  className="card-img-top img-fluid"
                  alt="Birthday Gift 4"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift for partner</h5>
                  <p className="text-muted">Perfect for birthday celebrations.</p>
                  <button className="btn btn-outline-danger">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white shadow-sm py-4 mt-auto">
        <div className="container text-center">
          <p className="mb-0 text-secondary">© 2026 Arya's Gift Shop | Designed with ❤️ using React & Bootstrap</p>
        </div>
      </footer>
    </div>
  );
}

export default Birthday;
