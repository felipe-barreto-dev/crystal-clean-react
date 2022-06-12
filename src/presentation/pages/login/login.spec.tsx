import React from 'react';
import { faker } from '@faker-js/faker';
import Login from './login';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import { ValidationStub } from '@/presentation/test';
import { Authentication, AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models';
import { mockAccountModel } from '@/domain/test';

class AuthenticationSpy implements Authentication {
  account = mockAccountModel();
  params: AuthenticationParams;
  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    return Promise.resolve(this.account);
  }
}

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

describe('Login Component', () => {
  afterEach(cleanup);

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
    const emailInput = sut.getByTestId('email');
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });

    const errorMessage = sut.getByTestId('error-message');
    expect(errorMessage.textContent).toBe(validationError);
  });

  test('Should show error if password validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } });

    const errorMessage = sut.getByTestId('error-message');
    expect(errorMessage.textContent).toBe(validationError);
  });

  test('Should show spinner on submit', () => {
    const { sut } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const passwordInput = sut.getByTestId('password');
    const emailInput = sut.getByTestId('email');

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.input(passwordInput, { target: { value: password } });

    const submitButton = sut.getByTestId('submit');
    fireEvent.click(submitButton);

    const spinner = sut.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  test('Should call authentication with correct values', () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const passwordInput = sut.getByTestId('password');
    const emailInput = sut.getByTestId('email');

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.input(passwordInput, { target: { value: password } });

    const submitButton = sut.getByTestId('submit');
    fireEvent.click(submitButton);

    expect(authenticationSpy.params).toEqual({
      email,
      password
    });
  });
});
