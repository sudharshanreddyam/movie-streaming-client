import MovieListItem from "../../Components/MovieListItem/MovieListItem";
import { dataService } from "../../../../services/moviedata.service";
import React, { Component } from "react";
import styled from "styled-components";
import { StateModel } from "./state.model";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`;

const movieCountStyle = {
  padding: "10px",
  fontSize: "18px",
  fontFamily: "sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

class MovieList extends Component<{}> {
  state = {
    items: [],
  };

  constructor(props: {}) {
    super(props);

    dataService.getMovies().then((movies) => {
      this.setState({
        items: movies,
      });
    });
  }
  render() {
    let counterMessage: string;
    const { items } = this.state;

    if (0 === items.length) {
      counterMessage = "No Movies Found";
    } else if (1 === items.length) {
      counterMessage = "1 Movie Found";
    } else {
      counterMessage = `${items.length} Movies Found`;
    }

    return (
      <>
        <div style={movieCountStyle}>{counterMessage}</div>
        <Ul>
          {items.map((item) => (
            <MovieListItem key={item.id} item={item} />
          ))}
        </Ul>
      </>
    );
  }
}

export default MovieList;
