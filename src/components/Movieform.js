import React, { useState } from "react";

const Movieform = ({ setMovieList, movieList }) => {
  const [formData, setFormData] = useState({
    name: "",
    ratings: 0,
    duration: "",
  });

  const [error, setError] = useState(false);

  const { name, ratings, duration } = formData;

  const handleChange = (e) => {
    const { name: nameOfInput, value } = e.target;
    setFormData({ ...formData, [nameOfInput]: value });

    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = new RegExp(/^\d*.\d*[hm]$/);
    const matched = regex.exec(duration);

    if (!matched) {
      setError(!error);
    } else {
      setMovieList([formData, ...movieList]);
      setFormData({ name: "", ratings: 0, duration: "" });
    }
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              name="ratings"
              onChange={handleChange}
              value={ratings}
              min="0"
              max="100"
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              name="duration"
              onChange={handleChange}
              value={duration}
            />
          </div>
          {/* Use this div when time format is invalid */}

          {error && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Movieform;
