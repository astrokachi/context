import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './Auth';

const Homepage = () => {
  const { user, setIsToggle, isToggle } = useContext(AuthContext);

  return (
    <div
      className={`w-full h-screen pt-32 flex  justify-center flex-col items-center ${
        !isToggle ? 'text-black bg-white border-black' : 'text-white bg-black border-white'
      } `}
    >
      <div className=" text-4xl">{user.name}</div>
      <div className="text-4xl">{user.email}</div>
      <button
        className="bg-orange-500 hover:scale-105 transition-all ease-in duration-150 shadow-md px-5 py-1 rounded mt-5"
        onClick={() => setIsToggle((isToggle) => !isToggle)}
      >
        Toggle
      </button>
    </div>
  );
};

export default Homepage;
