import Link from "next/link";
import React, { useState, useContext } from 'react';

function initialState() {
  return { username: '', password: '' };
}

const Login = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <><div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl border border-r-0 border-b-0 border-gray-200/25 drop-shadow-2xl backdrop-filter backdrop-blur-sm">
      <form className="h-full flex flex-col justify-evenly items-center">
        <div className="text-white text-2xl tracking-wider">Login</div>
        <input type="username" placeholder="Username:" onChange={onChange} value={values.username} className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide" />
        <input type="password" placeholder="Password:" onChange={onChange} value={values.password} className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide" />
        <div>
          <button className="text-white cursor-pointer px-8 py-2 bg-transparent hover:bg-white/20 border mr-6">Login</button>
          <button className="text-white cursor-pointer px-8 py-2 bg-transparent hover:bg-white/20 border">SignUp</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login;