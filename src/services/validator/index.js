const Joi = require('joi');

const validator = (schema) => (payload) => {
  const { error } = Joi.validate(payload, schema, { abortEarly: false });
  if (error) {
    const message = error.details.map((el) => el.message).join('\n');
    return {
      error: message,
    };
  }
  return true;
};

module.exports = validator;
