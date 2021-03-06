import React from 'react';
import renderer from 'react-test-renderer';
import Candytar from './Candytar';
import brandColors from '../../materials/colors/brandColors';

const getComponent = (props = {}) =>
  renderer.create(
    <Candytar size="2rem" src="/image/path" { ...props } />
  );

describe('Candytar', () => {
  it('renders with custom size', () => {
    const component = getComponent({ color: 'rose', size: '4rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders with color', () => {
    brandColors.forEach((color) => {
      it(color, () => {
        const component = getComponent({ color });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
