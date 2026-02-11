import { Component } from "react";

class ClassBased extends Component {
  // state = {
  //   name: "Karan",
  //   age: 21,
  // };

  changeName = () => {
    this.setState(
      {
        name: "Karan Jamwal",
      },
      () => {
        console.log("This is re-rendered", this.state.name);
      },
    );
  };

  changeAge = () => {
    this.setState({
      age: 22,
    });
  };

  reset = () => {
    this.setState({
      name: "Karan",
      age: 21,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "aoindsk",
      age: 29,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    console.log("Previous State", prevState, this.state);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <div>
        <h1>This is a class based component</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.changeName}>Change Name and Age</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassBased;
