import { SaveToStorage } from '@/domain/usecases/save-to-storage';
import { Storage } from '@/data/protocols/cache/storage';

export class LocalSaveStorage implements SaveToStorage {
  constructor(private readonly storage: Storage) {}

  save(key: string, content: object): void {
    this.storage.set(key, content);
  }
}
