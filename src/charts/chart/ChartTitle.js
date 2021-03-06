import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Heading from '../../components/typography/Heading';

export default class ChartTitle extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Heading textSize="headtitle" { ...rest }>
        { children }
      </Heading>
    );
  }
}


