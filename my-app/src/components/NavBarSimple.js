import React from "react";
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "Hello,guest!",
        buttonText: "Log In"
        
      };
}
handleClick() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous State:", prevState);
            return {
        buttonText:
        prevState.buttonText === "Log In" ? "Log Out" : "Log In",
        message:
        prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!"
              };
    });
  }
  render() {
    return (
      <div>
        <h1>
          My gallery
        </h1>
        <span>{this.state.message}</span>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
    </div>
    );
  }
}

export default NavBarSimple;