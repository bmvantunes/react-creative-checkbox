import './MyCheckbox.css';

import React, { Component } from 'react';

class MyCheckbox extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const checked = !this.state.checked;
    this.setState({ checked });
  }

  render() {
    const checked = this.state.checked ? ' checked ' : '';
    const right = this.props.align === 'right' ? ' right ' : ' left ';

    return (
      <label
        className={'my-checkbox ' + checked + right}
        onClick={this.handleClick}
      >
        {this.props.label}
      </label>
    );
  }
}

export default MyCheckbox;
