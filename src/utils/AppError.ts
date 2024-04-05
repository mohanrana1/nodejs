//global error handeling

export class AppError extends Error{
    status: string;
    isOperation: boolean;

    constructor(public StatusCode:number = 500, public message:string ){
        super(message)
        this.status = `${StatusCode}`.startsWith('4')?'fail':'error';
        this.isOperation = true
        Error.captureStackTrace(this,this.constructor)
    }
}