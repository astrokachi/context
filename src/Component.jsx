import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AuthContext } from './Auth';

const Component = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { setState, isToggle, setIsToggle } = useContext(AuthContext);

  const cookies = new Cookies();
  const { auth } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (auth === 'signup') {
      cookies.set('name', form.name);
      cookies.set('email', form.email);
      cookies.set('password', form.password);
    }

    navigate('/home');
  };

  return (
    <div
      className={`w-full h-screen pt-32 ${
        !isToggle ? 'text-black bg-white border-black' : 'text-white bg-black border-white'
      } `}
    >
      <div
        className={`${
          !isToggle ? 'text-black bg-white' : 'text-white bg-black'
        } container max-w-2xl mx-auto flex flex-col justify-center items-center  border  p-4 rounded-lg`}
      >
        {auth === 'login' && (
          <form>
            <div className="py-4">
              <label htmlFor="email" className="pr-12">
                email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border border-black rounded outline-none"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="pr-4">
                password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="border border-black rounded outline-none"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 text-white mx-auto w-full mt-5 px-2 py-1 rounded"
              onClick={(e) => handleSubmit(e)}
            >
              Log in
            </button>
            <Link to={'/signup'}>
              <p className="pt-4">Don't have an account? Sign up</p>
            </Link>
          </form>
        )}

        {auth === 'signup' && (
          <form>
            <div className="py-4">
              <label htmlFor="name" className="pr-10">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-black rounded outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="py-4">
              <label htmlFor="email" className="pr-12">
                email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border border-black rounded outline-none"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="pr-4">
                password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="border border-black rounded outline-none"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 text-white mx-auto w-full mt-5 px-2 py-1 rounded"
              onClick={(e) => {
                handleSubmit(e);
                setState(true);
              }}
            >
              Sign up
            </button>
            <Link to={'/login'}>
              <p className="pt-4">Already have an account? Log in</p>
            </Link>
          </form>
        )}
        <button
          className="bg-orange-500 hover:scale-105 transition-all ease-in duration-150 shadow-md px-5 py-1 rounded mt-5"
          onClick={() => setIsToggle((isToggle) => !isToggle)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Component;
