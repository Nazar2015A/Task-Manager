module.exports = class ApiError extends Error {
    status;
    errors;
  
    constructor(status, message, errors = []) {
      super(message);
      this.status = status;
      this.errors = errors;
    }
  
    static BadRequest(message = "Bad Request", errors = []) {
      return new ApiError(400, message, errors);
    }
  
    static UnauthorizedError(message = "Unauthorized", errors = []) {
      return new ApiError(401, message, errors);
    }
  
    static ForbiddenError(message = "Forbidden", errors = []) {
      return new ApiError(403, message, errors);
    }
  
    static NotFoundError(message = "Not Found", errors = []) {
      return new ApiError(404, message, errors);
    }
  
    static InternalServerError(message = "Internal Server Error", errors = []) {
      return new ApiError(500, message, errors);
    }
  }