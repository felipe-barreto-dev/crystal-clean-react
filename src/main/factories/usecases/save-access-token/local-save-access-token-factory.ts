import { LocalSaveStorage } from '@/data/usecases/local-save-storage/local-save-storage';
import { SaveToStorage } from '@/domain/usecases';
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory';

export const makeSaveToStorage = (): SaveToStorage => {
  return new LocalSaveStorage(makeLocalStorageAdapter());
};
