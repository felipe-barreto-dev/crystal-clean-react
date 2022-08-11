import { LocalSaveStorage } from '@/data/usecases/local-save-storage/local-save-storage';
import { SetStorageMock } from '@/tests/data/mocks';
import { faker } from '@faker-js/faker';

type SutTypes = {
  sut: LocalSaveStorage;
  setStorageMock: SetStorageMock;
};

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock();
  const sut = new LocalSaveStorage(setStorageMock);
  return {
    sut,
    setStorageMock
  };
};

describe('LocalSaveStorage', () => {
  test('Should call SetStorage with correct value', () => {
    const { sut, setStorageMock } = makeSut();
    const content = faker.science.unit();
    const key = faker.random.alphaNumeric();
    sut.save(key, content);
    expect(setStorageMock.key).toBe(key);
    expect(setStorageMock.value).toBe(content);
  });
});
