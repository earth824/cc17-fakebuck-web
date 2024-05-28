import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/)
  ]),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref('password'))
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
};

export default validateRegister;
