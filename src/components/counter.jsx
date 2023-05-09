import '@fortawesome/fontawesome-free/css/all.css';
import React from "react";
class Counter extends React.Component {
  
  
  render() {
      const { counter, onChange, onDelete } = this.props;
      return (
          <div className="row">
              <div className="w-100">{this.props.children}</div>
              <div className="col-sm-1">
                  <span className={this.getBadgeClasses()}>
                      {this.formatCount()}
                  </span>
              </div>
              <div className="col">
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onChange(counter,true)}
                  >
                      <span className="fa fa-plus"></span>
                  </button>
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm m-3"
                      onClick={() => onChange(counter,false)}
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
  getBadgeClasses() {
      let classes = "badge m-2 bg-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
  }
  formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
  }
}
export default Counter;