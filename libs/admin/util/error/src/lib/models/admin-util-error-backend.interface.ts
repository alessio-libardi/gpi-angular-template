export class AdminUtilErrorBackend extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AdminUtilErrorBackend';

    Object.setPrototypeOf(this, AdminUtilErrorBackend.prototype);
  }
}
