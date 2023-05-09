import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ReactDOM from "react-dom";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: Array.from({ length: this.props.ncounters }, (_, index) => ({
        id: index + 1,
        value: 0,
      })),
      maxId: this.props.maxCounters,
    };
  }
  handleChange = (counter, increment) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (increment) {
      counters[index].value++;
    } else {
      counters[index].value--;
    }

    this.setState({ counters });
  }
  
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
  recalculateId = (countersBase) => {
    let counters = [];
    let id = 1;
    for (const cont of countersBase) {
      counters.push({
        id: id,
        value: cont.value,
      })
      id++
    }
    this.setState({ counters });
  }
  handleCreate = () => {
    const counters = this.state.counters;
    if (counters.length + 1 <= this.state.maxId) {
      counters.push({ id: counters.length + 1, value: 0 })
      this.setState({ counters });
    }

  }
  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length} 
          onCreate={this.handleCreate} onReset={this.handleReset} 
          maxCounters={this.state.maxId} 
          atualCounters={this.state.counters} />
        <main role="main" className="container-fluid bg-antique">
          <div className="counters">
            <Counters
              counters={this.state.counters}
              onChange={this.handleChange}
              onDelete={this.handleDelete}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App ncounters={4} maxCounters={10} />, document.getElementById("root"));
export default App;