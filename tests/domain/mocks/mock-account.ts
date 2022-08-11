import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models';
import { faker } from '@faker-js/faker';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(),
  themeColor: faker.color.rgb(),
  userName: faker.name.firstName(),
  userEmail: faker.internet.email()
});