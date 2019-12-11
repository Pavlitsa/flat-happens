import React from "react";
import axios from "axios";

class Task extends React.Component {
  state = {
    unassigned: true
  };

  // still in progress

  handleClick = () => {
    axios.post(`/api/dashboard/${this.props.id}`).then(response => {
      console.log("this is the Axios response: ", response);
      this.props.getData();
    });
  };

  render() {
    console.log(this.props);
    return <h5 onClick={this.handleClick}>{this.props.name}</h5>;
  }
}

export default Task;
