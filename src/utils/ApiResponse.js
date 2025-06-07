class ApiResponse {
  constructor(status, message="success",data=null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success= 200 && status < 300; // Determine if the response is successful based on the status code
  }
}