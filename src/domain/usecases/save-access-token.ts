export interface SaveAccessToken {
  save: (key: string, accessToken: string) => Promise<void>;
}
