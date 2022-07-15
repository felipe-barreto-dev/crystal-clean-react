import { SaveAccessToken } from '@/domain/usecases/save-access-token';
import { SetStorage } from '@/data/protocols/cache/set-storage';

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor(private readonly setStorage: SetStorage) {}

  async save(key: string, accessToken: string): Promise<void> {
    this.setStorage.set(key, accessToken);
  }
}
