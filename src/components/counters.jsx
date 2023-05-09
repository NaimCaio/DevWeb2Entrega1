import React from "react";
import Counter from "./counter"
class Counters extends React.Component {
  constructor(props) {
      super(props);
      console.log("Counters constructor: props", props);
  }
  render() {
      const { counters,onChange, onDelete, } =
          this.props;
      return (
          <div>
              {counters.map((counter) => (
                  <Counter
                      key={counter.id}
                      onDelete={onDelete}
                      onChange={onChange}
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
