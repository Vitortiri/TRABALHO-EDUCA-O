const Joi = require('joi');

const authValidation = {
  register: {
    body: Joi.object().keys({
      email: Joi.string().email().required().messages({
        'string.email': 'Email inválido',
        'any.required': 'Email é obrigatório'
      }),
      senha: Joi.string().min(6).required().messages({
        'string.min': 'Senha deve ter no mínimo 6 caracteres',
        'any.required': 'Senha é obrigatória'
      }),
      tipo: Joi.string().valid('aluno', 'professor', 'admin').required().messages({
        'any.only': 'Tipo deve ser aluno, professor ou admin',
        'any.required': 'Tipo é obrigatório'
      })
    })
  },
  
  login: {
    body: Joi.object().keys({
      email: Joi.string().email().required().messages({
        'string.email': 'Email inválido',
        'any.required': 'Email é obrigatório'
      }),
      senha: Joi.string().required().messages({
        'any.required': 'Senha é obrigatória'
      })
    })
  }
};

module.exports = authValidation;