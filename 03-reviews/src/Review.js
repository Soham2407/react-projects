import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (indx) => {
    if (indx > people.length - 1) {
      return 0;
    }

    if (indx < 0) {
      return people.length - 1;
    }

    return indx;
  };

  const prevClickHandler = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextClickHandler = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPeople = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log("first", randomNumber);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
    }
    console.log(randomNumber);
    setIndex(checkIndex(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevClickHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextClickHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPeople}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
