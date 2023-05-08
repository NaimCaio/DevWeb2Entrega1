import '@fortawesome/fontawesome-free/css/all.css';
import React from "react";
class Counter extends React.Component {
  constructor(props) {
      super(props);
      console.log("Counter constructor: props", props);
  }
  componentDidUpdate(prevProps, prevState) {
      if (prevProps.counter.value !== this.props.counter.value) {
          // Ajax call and get new data from the server
          console.log("componentDidUpdate: Ajax has been called");
          console.log(`prevProps: ${prevProps.counter.value}`);
          console.log(`Props: ${this.props.counter.value}`);
      }
  }
  componentWillUnmount() {
      console.log("Counter - Unmount");
  }
  render() {
      console.log("Counter: props", this.props);
      const { counter, onIncrement, onDecrement, onDelete } = this.props;
      return (
          <div className="row">
              {/* jump line after counterid: 2) */}
              <div className="w-100">{this.props.children}</div>
              {/* break point medium (720px) */}
              {/* .col-xs-* classes, create a basic grid system that starts out stacked on */}
              {/* extra small sizes and becomes horizontal at the small breakpoint (sm). */}
              <div className="col-sm-1">
                  <span className={this.getBadgeClasses()}>
                      {this.formatCount()}
                  </span>
              </div>
              <div className="col">
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onIncrement(counter)}
                  >
                      <span className="fa fa-plus"></span>
                  </button>
                  {/* m-3 is the marging */}
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm m-3"
                      onClick={() => onDecrement(counter)}
                      disabled={counter.value === 0 ? "disabled" : ""}
                  >
                      <span className="fa fa-minus"></span>
                  </button>
                  <button
                      type="button"
                      className="btn btn-danger btn-sm "
                      onClick={() => onDelete(counter.id)}
                  >
                      <span className="fa fa-trash"></span>
                  </button>
              </div>
          </div>
      );
  }
  /**
   * Returns the color for this counter badge: yellow for 'Zero', or blue otherwise.
   *
   * @returns {String} the class for setting the color of this counter badge.
   */
  getBadgeClasses() {
      let classes = "badge m-2 bg-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
  }
  /**
   * Format the value of this counter as 'Zero' or its numerical value.
   *
   * @returns {String|Number} the value of this counter.
   */
  formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
  }
}
export default Counter;