import React, { Component } from "react";

class Mock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "hi"
    };

    //  this.greet = this.greet.bind(this)
  }

  static getDerivedStateFromProps() {
    console.log("React Lifecycle 2");
    return null;
  }

  componentDidMount() {
    console.log("I am the last");
  }

  //  greet() {
  //    this.setState(()=> ({
  //       key: 'How are you?'
  //    }))
  //  }

  greet = () => {
    this.setState({
      key: "How are you?"
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello my name is {this.state.key}</h1>
        <button
          className="change"
          onClick={() => {
            this.setState({
              key: "How are you?"
            });
          }}
        >
          Greet
        </button>
      </React.Fragment>
    );
  }
}

export default Mock;
