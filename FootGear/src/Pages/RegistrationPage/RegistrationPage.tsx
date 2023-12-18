import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/register/actions';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.scss';

const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {
      username: formData.get('txt') as string,
      email: formData.get('email') as string,
      password: formData.get('pswd') as string,
    };
    await dispatch(registerUser(user));
    navigate('/');
  };

  return (
    <div className='gen'>
      <div className="main">

        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="chk" className='lb' aria-hidden="true">Sign up</label>
            <input type="text" className='inp' name="txt" placeholder="User name" required />
            <input type="email" className='inp' name="email" placeholder="Email" required />
            <input type="password" className='inp' name="pswd" placeholder="Password" required />
            <button className='knop'>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="chk" className='lb' aria-hidden="true">Login</label>
            <input type="email" className='inp' name="email" placeholder="Email" required />
            <input type="password" className='inp' name="pswd" placeholder="Password" required />
            <button className='knop'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
