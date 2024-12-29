import Joi from 'joi';

export const validateAuth = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    phone: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateBooking = (req, res, next) => {
  const schema = Joi.object({
    pickupLocation: Joi.object({
      address: Joi.string().required(),
      coordinates: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required()
      }).required()
    }).required(),
    dropoffLocation: Joi.object({
      address: Joi.string().required(),
      coordinates: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required()
      }).required()
    }).required(),
    pickupTime: Joi.date().required(),
    passengers: Joi.number().min(1).max(8).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
