import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Login from './login';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);
  return {
    sut
  };
};

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut();
    const error = sut.container.getElementsByClassName('error');
    expect(error.length).toBe(0);

    const spinner = sut.container.getElementsByClassName('spinner');
    expect(spinner.length).toBe(0);
  });
});
