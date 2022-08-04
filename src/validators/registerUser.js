import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um email')
    .required('Email é obrigatório'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha'),
});
