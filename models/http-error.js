class HttpError extends Error {
    constructor(message, messages, errorCode) {
      super(message); // Add a "message" property
      this.messages = messages;
      this.code = errorCode; // Adds a "code" property
    }
  }
  
  module.exports = HttpError;