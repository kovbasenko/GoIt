import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";

// import HomePage from "./homePage/HomePage";
// import MoviesPage from "./moviesPage/MoviesPage";
// import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import("./homePage/HomePage"));
const MoviesPage = lazy(() => import("./moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./movieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
