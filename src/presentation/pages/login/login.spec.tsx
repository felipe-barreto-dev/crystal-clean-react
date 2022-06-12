import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login Component', () => {
  test('Should not render error on start', () => {
    const { container } = render(<Login />);
    const error = container.getElementsByClassName('error');
    expect(error.length).toBe(0);
  });
});

describe('Login Component', () => {
  test('Should not render spinner on start', () => {
    const { container } = render(<Login />);
    const spinner = container.getElementsByClassName('spinner');
    expect(spinner.length).toBe(0);
  });
});
