import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Cakes() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cakes")
      .then(res => setCakes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm py-5 text-center">
        <h1 className="fw-bold text-warning mt-4">Delicious Cakes 🍰</h1>
        <p className="lead text-secondary mt-3">
          Freshly baked cakes for every occasion.
        </p>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {cakes.map((cake) => (
              <div key={cake._id} className="col-sm-6 col-md-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`http://localhost:5000/uploads/${cake.image}`}
                    className="card-img-top"
                    alt={cake.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cake.name}</h5>
                    <p className="text-muted">₹{cake.price}</p>
                    <button className="btn btn-outline-warning">Order Now</button>
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

export default Cakes;
