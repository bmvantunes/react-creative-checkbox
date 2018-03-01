import { shallow } from 'enzyme';
import React from 'react';

import MyCheckbox from './MyCheckbox';

describe('My Checkbox Component', () => {
  describe('Left aligned checkbox', () => {
    let checkbox;

    beforeEach(() => {
      checkbox = shallow(<MyCheckbox label="Some label" />);
    });

    describe('Before click', () => {
      it('renders with left class', () => {
        expect(checkbox.find('label').hasClass('left')).toBe(true);
      });

      it('renders without right class', () => {
        expect(checkbox.find('label').hasClass('right')).toBe(false);
      });

      it('renders with my-checkbox class', () => {
        expect(checkbox.find('label').hasClass('my-checkbox')).toBe(true);
      });

      it('renders with "Some label" text', () => {
        expect(checkbox.text()).toEqual('Some label');
      });

      it('renders without checked class', () => {
        expect(checkbox.find('label').hasClass('checked')).toBe(false);
      });
    });

    describe('After click', () => {
      beforeEach(() => {
        checkbox.find('label.my-checkbox').simulate('click');
      });

      it('renders with left class', () => {
        expect(checkbox.find('label').hasClass('left')).toBe(true);
      });

      it('renders without right class', () => {
        expect(checkbox.find('label').hasClass('right')).toBe(false);
      });

      it('renders with my-checkbox class', () => {
        expect(checkbox.find('label').hasClass('my-checkbox')).toBe(true);
      });

      it('renders with "Some label" text', () => {
        expect(checkbox.text()).toEqual('Some label');
      });

      it('renders without checked class', () => {
        expect(checkbox.find('label').hasClass('checked')).toBe(true);
      });
    });
  });

  describe('Right aligned checkbox', () => {
    let checkbox;

    beforeEach(() => {
      checkbox = shallow(<MyCheckbox label="Another label" align="right" />);
    });

    describe('Before click', () => {
      it('renders without left class', () => {
        expect(checkbox.find('label').hasClass('left')).toBe(false);
      });

      it('renders with right class', () => {
        expect(checkbox.find('label').hasClass('right')).toBe(true);
      });

      it('renders with my-checkbox class', () => {
        expect(checkbox.find('label').hasClass('my-checkbox')).toBe(true);
      });

      it('renders with "Another label" text', () => {
        expect(checkbox.text()).toEqual('Another label');
      });

      it('renders without checked class', () => {
        expect(checkbox.find('label').hasClass('checked')).toBe(false);
      });
    });

    describe('After click', () => {
      beforeEach(() => {
        checkbox.find('label.my-checkbox').simulate('click');
      });

      it('renders without left class', () => {
        expect(checkbox.find('label').hasClass('left')).toBe(false);
      });

      it('renders with right class', () => {
        expect(checkbox.find('label').hasClass('right')).toBe(true);
      });

      it('renders with my-checkbox class', () => {
        expect(checkbox.find('label').hasClass('my-checkbox')).toBe(true);
      });

      it('renders with "Another label" text', () => {
        expect(checkbox.text()).toEqual('Another label');
      });

      it('renders without checked class', () => {
        expect(checkbox.find('label').hasClass('checked')).toBe(true);
      });
    });
  });
});
