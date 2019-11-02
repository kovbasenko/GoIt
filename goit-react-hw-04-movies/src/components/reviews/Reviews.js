import React, { Component } from "react";
import { movieReviewsRequest } from "../../services/movieApi";
import styles from "./reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { id } = this.props;
    movieReviewsRequest(id).then((response) => {
      this.setState({ reviews: response.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);

    return (
      <>
        {reviews.length === 0 ? (
          <p>We dont have reviews for this movie</p>
        ) : (
          <ul>
            {reviews.map((review) => {
              return (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p className={styles.review}>{review.content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
