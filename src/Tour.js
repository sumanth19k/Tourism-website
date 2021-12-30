import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  // const [tour, setTour] = useState({ id, image, info, price, name });
  // const delTour = (id) => {
  //   let newTour = tour.id !== id;
  //   setTour(newTour);
  // };
  // const [tour, seTour] = useState();

  const [readMore, setRoadMore] = useState(true);
  const readMor = (readM) => {
    if (readM) {
      setRoadMore(!readM);
    } else setRoadMore(!readM);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">Rs. {price}/-</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}....`}
          <button onClick={() => readMor(readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
