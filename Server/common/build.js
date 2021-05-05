const { ERROR, SUCCESS } = require('../common/constants')

const buildSuccess = (data) => {
    return {
        status: SUCCESS,
        response: data
    }
}

const buildError = (error) => {
    return {
        status: ERROR,
        response: error
    }
}

module.exports = {
    buildError, buildSuccess
}