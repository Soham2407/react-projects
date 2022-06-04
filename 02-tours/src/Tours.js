import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours, fetchTours }) => {
  return (
    <section>
      <div className="title">
        <h2>{tours.length === 0 ? "no tours left" : "our tours"}</h2>
        {tours.length === 0 ? (
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        ) : (
          <div className="underline"></div>
        )}
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour?.id} {...tour} removeTours={removeTours} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
