import { Storage } from '@/data/protocols/cache/storage';

export class SetStorageMock implements Storage {
  key: string;
  value: object;

  set(key: string, value: object): void {
    this.key = key;
    this.value = value;
  }
}
