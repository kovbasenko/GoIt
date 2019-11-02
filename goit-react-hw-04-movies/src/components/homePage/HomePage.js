import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

import { trendsRequest } from "../../services/movieApi";

class HomePage extends Component {
  state = {
    trends: [],
  };

  componentDidMount() {
    trendsRequest().then((response) =>
      this.setState({ trends: response.data.results })
    );
  }

  render() {
    const { trends } = this.state;

    return (
      <div className={styles.trends}>
        <h1>Trending today</h1>
        <ul className={styles.list}>
          {trends.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location.pathname },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage;
