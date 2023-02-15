import { Component } from "react";
import { Col } from "react-bootstrap";
import TrendingNow from "./TradingNow";
import WatchItAgain from "./WatchItAgain";
import NewReleses from "./NewReleses";

class MainFilmRow extends Component {
  render() {
    return (
      <Col>
        <TrendingNow />
        <WatchItAgain />
        <NewReleses />
      </Col>
    );
  }
}

export default MainFilmRow;
