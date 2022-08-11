import { Storage } from '@/data/protocols/cache/storage';
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter';

export const makeLocalStorageAdapter = (): Storage => {
  return new LocalStorageAdapter();
};
