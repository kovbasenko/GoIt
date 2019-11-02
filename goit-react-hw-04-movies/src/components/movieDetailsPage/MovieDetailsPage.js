import React, { Component, Suspense, lazy } from "react";
import { movieDetailsRequest } from "../../services/movieApi";
import { Route, Link } from "react-router-dom";
import styles from "./movieDetailsPage.module.css";

// import Cast from "../cast/Cast";
// import Reviews from "../reviews/Reviews";

const Cast = lazy(() => import("../cast/Cast"));
const Reviews = lazy(() => import("../reviews/Reviews"));

export default class MovieDetailsPage extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    movieDetailsRequest(id).then((response) => {
      const {
        original_title,
        overview,
        vote_average,
        genres,
        poster_path,
      } = response.data;
      let genresString = "";
      genres.forEach((element) => {
        genresString = genresString + "  " + element.name;
      });
      this.setState({
        id,
        title: original_title,
        overview,
        rating: vote_average,
        genres: genresString,
        poster: poster_path,
      });
    });
  }

  backButton = () => {
    this.props.history.push(this.props.location.state.from);
  };

  render() {
    const { title, overview, genres, rating, id, poster } = this.state;

    return (
      <div className={styles.movieDetailsPage}>
        <h1>Movie Details</h1>
        <button className={styles.button} onClick={this.backButton}>
          ←Go back
        </button>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt="image"
          width="220"
        />
        <h2>{title}</h2>
        <p className={styles.movieText}>User Score: {rating * 10}%</p>
        <h3>Overview</h3>
        <p className={styles.movieText}>{overview}</p>
        <h3>Genres</h3>
        <p className={styles.genres}>{genres}</p>
        <h3>Addictional information</h3>
        <ul>
          <li className={styles.link}>
            <Link
              to={{
                pathname: `/movies/${id}/cast`,
                state: { from: this.props.location.state.from },
              }}
            >
              Cast
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to={{
                pathname: `/movies/${id}/reviews`,
                state: { from: this.props.location.state.from },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            path={`/movies/${id}/cast`}
            exact
            render={(props) => <Cast {...props} id={id} />}
          />
          <Route
            path={`/movies/${id}/reviews`}
            exact
            render={(props) => <Reviews {...props} id={id} />}
          />
        </Suspense>
      </div>
    );
  }
}
