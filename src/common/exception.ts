export default class Exception extends Error {
    statusCode: number |null;
    message: string;
    error: string | null;
  
    constructor(message: string,statusCode?: number,  error?: string) {
      super(message);  
      this.statusCode = statusCode|| null;
      this.message = message;
      this.error = error || null;
    }
}