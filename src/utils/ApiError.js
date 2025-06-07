class ApiError extends Error {
    constructor(
        statusCode,
        message = 'something went wrong',
        errors= [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors= errors;
        this.data = null; // Initialize data as null
        this.message = message; // Set the message property

        if (stack) {
            this.stack = stack; // Set the stack trace if provided
        }else {
            Error.captureStackTrace(this, this.constructor); // Capture the stack trace
        }
    }
}

export default ApiError;