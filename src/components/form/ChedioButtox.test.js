import React from 'react';
import renderer from 'react-test-renderer';
import ChedioButtox from './ChedioButtox';

const defaultProps = {
  inputType: 'checkbox',
  indicatorClassName: 'ax-lorem',
  inputClassName: 'ax-ipsum',
  title: 'Lorem ipsum dolor sit amet',
};

const getComponent = (props = {}) =>
  renderer.create(
    <ChedioButtox
        { ...defaultProps }
        { ...props }>
      Lorem ipsum
    </ChedioButtox>
  );

describe('ChedioButtox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled', () => {
    const component = getComponent({ disabled: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with invalid', () => {
    const component = getComponent({ invalid: true });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
