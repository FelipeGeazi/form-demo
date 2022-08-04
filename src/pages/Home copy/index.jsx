import { useState } from 'react';
import Form from '../../components/Form';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name, email, password, confirmPassword);
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' id='name' onChange={(e) => setName(e.target.value)} />

      <label htmlFor='email'>Email:</label>
      <input
        type='text'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='password'>Senha:</label>
      <input
        type='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor='confirm-password'>Confirmar Senha:</label>
      <input
        type='password'
        id='confirm-password'
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};
export default Home;
