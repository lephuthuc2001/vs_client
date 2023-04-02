import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grow w-full p-5 place-items-center">
      <div className="prose mb-3">
        <div className="md:text-4xl text-3xl text-neutral-900">
          Freshest and tastiest <br />{" "}
          <span className="text-primary font-bold">SeaFood</span> in town!
        </div>
        <div>
          <p className="md:text-xl text-base">
            Our carefully selected seafood is sourced from the best suppliers
            and delivered to you with the utmost care.
          </p>
        </div>
        <Link to="/products" className="btn btn-primary btn-lg  mt-3">
          Shop now!
        </Link>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1622391075054-518eafc230f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Image"
          className="object-fill"
        />
      </div>
    </div>
  );
}

export default Home;
