import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Gifts() {
  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm py-5 text-center">
        <h1 className="fw-bold text-primary mt-4">All Gifts 🎁</h1>
        <p className="lead text-secondary mt-3">
          Thoughtful gifts to make every moment special.
        </p>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/051/741/735/small/luxury-wrist-watches-on-display-in-retail-store-window-photo.jpg"
                  className="card-img-top"
                  alt="Gift 1"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift 1</h5>
                  <p className="text-muted">Perfect for any occasion.</p>
                  <button className="btn btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://www.themancompany.com/cdn/shop/files/Gentlemen_s_Moods_c3bbcec6-cde8-42c2-80cb-08b603eb4c14.jpg?v=1769668902"
                  className="card-img-top"
                  alt="Gift 2"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift 2</h5>
                  <p className="text-muted">Perfect for any occasion.</p>
                  <button className="btn btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcCc-ywfuhrFD_UuLfknxgrFcXg3U_r7Llg&s"
                  className="card-img-top"
                  alt="Gift 3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift 3</h5>
                  <p className="text-muted">Perfect for any occasion.</p>
                  <button className="btn btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAHGSYIfRenEtCUsGpYPaJPF9xd7LwKCzIA&s"
                  className="card-img-top"
                  alt="Gift 4"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Gift 4</h5>
                  <p className="text-muted">Perfect for any occasion.</p>
                  <button className="btn btn-outline-primary">Buy Now</button>
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

export default Gifts;
