import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Anniversary() {
  const [anniversaries, setAnniversaries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/anniversary")
      .then(res => setAnniversaries(res.data))
      .catch(err => console.error(err));
  }, []);

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
            {anniversaries.map((gift) => (
              <div key={gift._id} className="col-sm-6 col-md-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`http://localhost:5000/uploads{anniversary.image}`}
                    className="card-img-top"
                    alt={gift.giftName}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{gift.giftName}</h5>
                    <p className="text-muted">₹{gift.price}</p>
                    <button className="btn btn-outline-success">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
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
