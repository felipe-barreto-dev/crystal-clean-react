import React from 'react';
import { faker } from '@faker-js/faker';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Input from '@/presentation/components/input/input';
import Context from '@/presentation/contexts/form/form-context';

const makeSut = (
  inputType = faker.database.column(),
  fieldName = faker.random.word(),
  placeHolder = faker.random.words(3)
): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input type={inputType} name={fieldName} placeholder={placeHolder} />
    </Context.Provider>
  );
};

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const fieldName = faker.random.word();
    const sut = makeSut(faker.database.column(), fieldName, faker.random.words(3));
    const input = sut.getByTestId(fieldName) as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  test('Should remove readOnly on focus', () => {
    const fieldName = faker.random.word();
    const sut = makeSut(faker.database.column(), fieldName, faker.random.words(3));
    const input = sut.getByTestId(fieldName) as HTMLInputElement;
    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);
  });
});
