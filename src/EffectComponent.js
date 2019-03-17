import React, { Component } from "react";

export class FormikEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.didUpdate(prevProps, this.props);
  }
  render() {
    return null;
  }
}
