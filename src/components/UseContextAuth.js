import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function UseContextAuth() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <h1 className='text-4xl font-bold'>
        Click on the checkbox to get authenticated
      </h1>

      {isAuth ? (
        <p>You are now Authenticated</p>
      ) : (
        <p>You are not authenticated</p>
      )}

      <input
        type="checkbox"
        checked={isAuth}
        onChange={toggleAuth}
      />
      <span>I'm not a robot</span>
    </div>
  );
}

export default UseContextAuth;
