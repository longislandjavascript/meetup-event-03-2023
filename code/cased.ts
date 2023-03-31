export function lowerCase(str: any) {
  try {
    return str.toLowerCase();
  } catch (error) {
    throw new CasedError(
      `lowerCase Method: Please provide a valid string.`,
      error as Error
    );
  }
}

export function upperCase(str: any): string {
  try {
    return str.toUpperCase();
  } catch (error) {
    throw new CasedError(
      `upperCase Method: Please provide a valid string.`,
      error as Error
    );
  }
}

// Our custom error
// See 6.js for usage
class CasedError extends Error {
  public cause?: Error;
  constructor(message: string, cause: Error) {
    super(message);

    this.cause = cause;
    this.name = "CasedError";
  }
}
