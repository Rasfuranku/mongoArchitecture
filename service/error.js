'use strict';

class ErrorService {
    constructor() { }

    static buildErrorMessage(param, msg) {
        var errObj = {param: '', msg: ''};
        errObj.param = param;
        errObj.msg = msg;
        return errObj;
    }

    static buildErrorResponse(errors, code) {
        var errObj = {errors: [], code: ''};
        errObj.errors = errors;
        errObj.code = code;
        return errObj;
    }

}

module.exports = ErrorService;