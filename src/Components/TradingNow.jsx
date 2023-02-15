import React, { Component } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

class TrendingNow extends Component {
  state = {
    movies: [],
    hasError: false,
    errorMessage: "",
    isLoading: true,
  };

  fetchQuery = async () => {
    try {
      const response = await fetch(
        " http://www.omdbapi.com/?i=tt3896198&apikey=d0c97944&s=Lord"
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `FATAL ERROR ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR ${error.status}`,
      });
    }
  };

  componentDidMount = () => {
    this.fetchQuery();
  };

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#221f1f" }} className="mt-3">
        <h4 style={{ color: "white", fontSize: "2em" }}>Trending Now</h4>
        <Row>
          {this.state.movies.slice(4).map((movie) => (
            <Col
              key={movie.imdbID}
              xs={12}
              sm={6}
              lg={3}
              xl={2}
              className="mb-2"
            >
              <Image
                src={movie.Poster}
                alt="Poster-movies"
                id="movieImg"
                style={{ width: "70%" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TrendingNow;
