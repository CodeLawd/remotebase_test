import React from "react";

function Movieslist({ movieList, searchList }) {
  const convertDuration = (duration) => {
    let durationInNumber = +duration.slice(0, -1);

    if (duration.charAt(duration.length - 1) === "m") {
      return (durationInNumber / 60).toFixed(1);
    }

    return durationInNumber;
  };

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {searchList !== null 
          ? searchList?.map((movie, index) => (
              <li
                key={index}
                className="flex slide-up-fade-in justify-content-between"
                style={{ borderBottom: "2px solid var(--primary-color)" }}
              >
                <div className="layout-column w-40">
                  {/* use this header for movie name */}
                  <h3 className="my-3">{movie.name}</h3>
                  {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                  <p className="my-0">{movie.ratings} /100</p>
                </div>
                <div className="layout-row my-auto mr-20">
                  {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                  <p className="justify-content-end">
                    {convertDuration(movie.duration)} Hrs
                  </p>
                </div>
              </li>
            ))
          : movieList?.map((movie, index) => (
              <li
                key={index}
                className="flex slide-up-fade-in justify-content-between"
                style={{ borderBottom: "2px solid var(--primary-color)" }}
              >
                <div className="layout-column w-40">
                  {/* use this header for movie name */}
                  <h3 className="my-3">{movie.name}</h3>
                  {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                  <p className="my-0">{movie.ratings} /100</p>
                </div>
                <div className="layout-row my-auto mr-20">
                  {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                  <p className="justify-content-end">
                    {convertDuration(movie.duration)} Hrs
                  </p>
                </div>
              </li>
            ))}
      </ul>
    </section>
  );
}

export default Movieslist;
