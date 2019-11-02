import React, { Component } from "react";
import { movieSearchRequest } from "../../services/movieApi";
import { Link } from "react-router-dom";
import styles from "./moviesPage.module.css";
import qs from "qs";

export default class MoviesPage extends Component {
  state = {
    search: "",
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.search === "") return;

    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    movieSearchRequest(query.query).then((res) => {
      this.setState({ movies: res.data.results });
    });
  }

  handleChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { search } = this.state;

    if (search === "") return;

    movieSearchRequest(search)
      .then((res) => {
        this.setState({ movies: res.data.results }, () =>
          console.log(res.data.results)
        );
      })
      .finally(() => {
        this.props.history.push({ search: `query=${search}` });
        // this.props.match.params = { query: search };
      });
  };

  render() {
    const { search, movies } = this.state;

    return (
      <div className={styles.movies}>
        <h1>Movies Page</h1>
        <form className={styles.form} onSubmit={this.handleSearch}>
          <input
            value={search}
            onChange={this.handleChangeSearch}
            type="text"
            placeholder="Search movie..."
          />
          <button>Search</button>
        </form>

        {movies.length !== 0 && (
          <ul className={styles.list}>
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {movie.original_title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
