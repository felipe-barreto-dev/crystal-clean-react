import { SaveToStorage } from '@/domain/usecases/save-to-storage';

export class StorageMock implements SaveToStorage {
  content: object;

  save(key: string, content: object): void {
    this.content = content;
  }
}
