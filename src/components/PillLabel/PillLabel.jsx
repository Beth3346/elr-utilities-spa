import React, { Component } from 'react';
import './PillLabel.scss';

class PillLabel extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, isActive: true };
  }

  handleClick = () => {
    this.setState(() => ({ isActive: false }));
  };

  render() {
    const { icon, title, value, dismissible, contextClass } = this.props;
    const classes = this.state.isActive
      ? `elr-label ${contextClass}`
      : `elr-label fade ${contextClass}`;

    return (
      this.state.show && (
        <div className={classes}>
          {icon && <span className="elr-label-icon">{icon}</span>}
          <span className="elr-label-title">{title}</span>
          {value && <span className="elr-label-value">{value}</span>}
          {dismissible && (
            <span
              onClick={this.handleClick}
              className="fa fa-times elr-label-close"
            />
          )}
        </div>
      )
    );
  }
}

export default PillLabel;
