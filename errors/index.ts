class DatabaseError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
        this.statusCode = 500;
    }
}

class ValidationError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400;
    }
}

export { DatabaseError, ValidationError }