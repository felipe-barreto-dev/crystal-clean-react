import React from 'react';
import { faker } from '@faker-js/faker';
import 'jest-localstorage-mock';
import Login from './login';
import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { ValidationStub, AuthenticationSpy } from '@/presentation/test';

type SutTypes = {
  sut: RenderResult;
  authenticationSpy: AuthenticationSpy;
};

type SutParams = {
  validationError: string;
};

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub();
  const authenticationSpy = new AuthenticationSpy();
  validationStub.errorMessage = params?.validationError;
  const sut = render(<Login validation={validationStub} authentication={authenticationSpy} />);
  return {
    sut,
    authenticationSpy
  };
};

const simulateValidSubmit = (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): void => {
  populateEmailField(sut, email);
  populatePasswordField(sut, password);
  const submitButton = sut.getByTestId('submit');
  fireEvent.click(submitButton);
};

const populateEmailField = (sut: RenderResult, email = faker.internet.email()): void => {
  const emailInput = sut.getByTestId('email');
  fireEvent.input(emailInput, { target: { value: email } });
};

const populatePasswordField = (sut: RenderResult, password = faker.internet.password()): void => {
  const passwordInput = sut.getByTestId('password');
  fireEvent.input(passwordInput, { target: { value: password } });
};

describe('Login Component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    localStorage.clear();
  });

  test('Should start with initial state', () => {
    const { sut } = makeSut();
    const error = sut.container.getElementsByClassName('error');
    expect(error.length).toBe(0);

    const spinner = sut.container.getElementsByClassName('spinner');
    expect(spinner.length).toBe(0);

    const emailInput = sut.getByTestId('email');
    expect(emailInput.textContent).toEqual('');

    const passwordInput = sut.getByTestId('password');
    expect(passwordInput.textContent).toEqual('');
  });

  test('Should show error if email validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateEmailField(sut);
    const errorMessage = sut.getByTestId('error-message');
    expect(errorMessage.textContent).toBe(validationError);
  });

  test('Should show error if password validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populatePasswordField(sut);
    const errorMessage = sut.getByTestId('error-message');
    expect(errorMessage.textContent).toBe(validationError);
  });

  test('Should show spinner on submit', () => {
    const { sut } = makeSut();
    simulateValidSubmit(sut);
    const spinner = sut.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  test('Should call authentication with correct values', () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    simulateValidSubmit(sut, email, password);
    expect(authenticationSpy.params).toEqual({
      email,
      password
    });
  });

  test('Should call Authentication only once', () => {
    const { sut, authenticationSpy } = makeSut();
    simulateValidSubmit(sut);
    expect(authenticationSpy.callsCount).toBe(1);
  });

  /*
  test('Should add accessToken to localstorage on success', async () => {
    const { sut, authenticationSpy } = makeSut();
    simulateValidSubmit(sut);
    await waitFor(() => sut.getByTestId('form'));
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'accessToken',
      authenticationSpy.account.accessToken
    );
  });
  */
});
