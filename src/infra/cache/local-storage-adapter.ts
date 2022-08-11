import { Storage } from '@/data/protocols/cache/storage';

export class LocalStorageAdapter implements Storage {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
