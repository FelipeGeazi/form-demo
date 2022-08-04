import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';
import { schema } from '../../validators/registerUser';

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  function registerUser(data) {
    console.log(data);

    // faz o login

    navigate('/dashboard', { replace: true });
  }

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' id='name' {...register('name')} />
      <p>{errors.name?.message}</p>

      <label htmlFor='email'>Email:</label>
      <input type='text' id='email' {...register('email')} />
      <p>{errors.email?.message}</p>

      <label htmlFor='password'>Senha:</label>
      <input type='password' id='password' {...register('password')} />
      <p>{errors.password?.message}</p>

      <label htmlFor='confirm-password'>Confirmar Senha:</label>
      <input
        type='password'
        id='confirm-password'
        {...register('confirmPassword')}
      />
      <p>{errors.confirmPassword?.message}</p>

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};
export default Home;
