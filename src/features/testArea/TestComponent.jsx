import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

const mapState = (state) => ({
  data: state.test.data,
  events: state.events,
});

const actions = {
  incrementCounter,
  decrementCounter,
};

class TestComponent extends Component {
  render() {
    const { events, data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='decrement' />
        <div>
          <p>{events[0].id}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
