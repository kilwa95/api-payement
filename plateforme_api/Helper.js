const _ = require('lodash');

const HTTP = {
  CREATED: 201,
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

function isEmpty(values) {
  return values.some((value) => {
    if (Array.isArray(value)) {
      return value.length;
    }
    if (typeof value === 'object' && value !== null) {
      return _.isEmpty(value);
    }
    return ['', undefined, null].includes(value);
  });
}

module.exports = { HTTP, isEmpty };
