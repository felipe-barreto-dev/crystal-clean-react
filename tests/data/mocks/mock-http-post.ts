import { HttpPostParams } from '../protocols/http';
import { faker } from '@faker-js/faker';

export const mockPostRequest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.random.alphaNumeric()
});
