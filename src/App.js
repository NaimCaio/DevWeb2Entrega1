import React, { Component } from "react";
import "./App.css";
//import NavBar from "./components/navbar";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ReactDOM from "react-dom";
class App extends Component {
  
  constructor(props) {
    super(props);
    console.log("App constructor: props", this.props);
    /**
     * <p>The state of the application.</p>
     * React components have a built-in state object which is private to the component.
     * <ul>
     *  <li>State can not be accessed from outside the class.</li>
     *  <li>However, it can be passed as an argument to another component.</li>
     * </ul>
     * @type {Object}
     * @property {Array<Object<id:Number,value:Number>>} state.counters array of counter objects.
     * @property {state_setter} state.setState setter - change state.
     */
    this.state = {
      counters: Array.from({ length: this.props.ncounters }, (_, index) => ({
        id: index + 1,
        value: 0,
      })),
      maxId: this.props.maxCounters,
    };
  }
  handleIncrement = (counter) => {
    console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // a copy of the counter object: {id: i , value: v}
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    console.log("Decrement", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    this.recalculateId(counters);
  };
  recalculateId =(countersBase)=>{
    let counters = [];
    let id=1;
    for (const cont of countersBase) {
      counters.push({
        id: id,
        value: cont.value,
      })
      id++
    }
    this.setState({ counters });
  }
  handleCreate= ()=>{
    const counters = this.state.counters;
    if(counters.length+1<=this.state.maxId){
      counters.push({ id: counters.length+1, value: 0 })
    this.setState({ counters });
    }
    
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} onCreate={this.handleCreate} />
        <main role="main" className="container-fluid bg-antique">
          <div className="counters">
            <Counters
              // pass 5 props to Counters (props are read only)
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App ncounters={4} maxCounters={10}/>, document.getElementById("root"));
export default App;