import { Error } from "../types";

export class ErrorForm {
  private readonly identifier: string;
  private readonly error: string;

  constructor(identifier: string, error: string) {
    this.error = error;
    this.identifier = identifier;
  }

  public getError(): Error {
    return {
      identifier: this.identifier,
      error: this.error
    };
  }
}
