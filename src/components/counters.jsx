import React from "react";
import Counter from "./counter"
class Counters extends React.Component {
  constructor(props) {
      super(props);
      console.log("Counters constructor: props", props);
  }
  render() {
      const { counters, onReset, onDelete, onIncrement, onDecrement } =
          this.props;
      return (
          <div>
              <button
                  onClick={onReset}
                  className="btn btn-primary btn-sm m-2"
              >
                  Reset
              </button>
              {counters.map((counter) => (
                  <Counter
                      key={counter.id}
                      // Counter component raises these events and we are bubbling them up to its parent
                      onDelete={onDelete}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                      counter={counter}
                  >
                      <h6>{counter.id})</h6>
                  </Counter>
              ))}
          </div>
      );
  }
}
export default Counters;
