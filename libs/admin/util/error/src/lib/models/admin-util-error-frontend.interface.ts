export class AdminUtilErrorFrontend extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AdminUtilErrorFrontend';

    Object.setPrototypeOf(this, AdminUtilErrorFrontend.prototype);
  }
}
