import PropTypes from 'prop-types';
import React, { Component } from 'react';
import root from 'window-or-global';

export default class ReactHapticButton extends Component {
  render () {
    const {
      children,
      isHapticFeedbackEnabled,
      hapticFeedbackDuration,
      onClick,
      ...others
    } = this.props;
    return (
      <button
        onClick={(e) => {
          if (isHapticFeedbackEnabled) {
            root?.navigator?.vibrate?.(hapticFeedbackDuration);
          }
          onClick?.(e);
        }}
        {...others}
      >
        {children}
      </button>
    );
  }
}

ReactHapticButton.defaultProps = {
  isHapticFeedbackEnabled: true,
  hapticFeedbackDuration: 10,
};

ReactHapticButton.propTypes = {
  children: PropTypes.node,
  isHapticFeedbackEnabled: PropTypes.boolean,
  hapticFeedbackDuration: PropTypes.number,
  onClick: PropTypes.func,
};
