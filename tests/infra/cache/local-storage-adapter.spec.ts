import { faker } from '@faker-js/faker';
import 'jest-localstorage-mock';
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter';

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter();

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Should call localStorage with correct values', () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.science.unit();
    sut.set(key, value);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
