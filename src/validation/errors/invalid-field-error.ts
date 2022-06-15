export class InvalidFieldError extends Error {
  constructor() {
    super('The field is invalid.');
  }
}
