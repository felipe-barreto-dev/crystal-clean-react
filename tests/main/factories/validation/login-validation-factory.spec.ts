import { makeLoginValidation } from '@/main/factories/validation';
import { ValidationComposite } from '@/main/composites';
import { ValidationBuilder } from '@/main/builders/validation-builder';

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation();
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build()
      ])
    );
  });
});
