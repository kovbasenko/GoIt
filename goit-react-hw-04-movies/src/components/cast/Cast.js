import React, { Component } from "react";
import { movieCastRequest } from "../../services/movieApi";
import styles from "./cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { id } = this.props;
    movieCastRequest(id).then((response) => {
      this.setState({ cast: response.data.cast });
    });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul>
          {cast.map((actor) => {
            return (
              <li key={actor.id} className={styles.item}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w66_and_h66_face${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
