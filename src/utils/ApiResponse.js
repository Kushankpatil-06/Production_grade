class ApiResponse {
    constructor(status, data = null,message = "Success") {
        this.status = status;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}