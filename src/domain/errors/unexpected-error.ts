export class UnexpectedError extends Error {
  constructor() {
    super('Something wents wrong.');
    this.name = 'UnexpectedError';
  }
}
