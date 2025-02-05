import React, { useEffect, useState } from "react";
import axios from "axios";
import ContinueWith from "./continueWith";

const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    location: "",
  };

  const loading = false;

  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState(initialState);

  const resetForm = () => {
    setData(initialState);
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/signup", { ...data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex pt-28 gap-5 md:gap-3 flex-col justify-center items-center md:flex-row'>
      {/* Left side */}
      <div className='p-2 m-auto w-full md:w-[50%] md:flex-col justify-center lg:flex'>
        {!isSignUp ? (
          <span>
            <h1 className='text-2xl text-center m-auto w-1/2'>
              GOOD TO HAVE YOU BACK
            </h1>
            <h3 className='text-center'>
              You can sign in to Envato Elements with your existing Envato
              account.
            </h3>
          </span>
        ) : (
          <h1 className='text-3xl text-center m-auto w-1/2'>
            Create a free account
          </h1>
        )}
      </div>
      {/* Right form side */}
      <div className='m-auto md:w-[50%]'>
        <div className='border-[0.5px] shadow-lg border-gray-400 rounded-xl m-auto w-[90%] md:w-[22rem]'>
          <ContinueWith />
          <form
            className='m-auto w-[95%] p-5 md:w-[90%]'
            onSubmit={handleSubmit}
          >
            {isSignUp && (
              <div className='flex flex-col gap-2'>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input
                    required
                    type='text'
                    placeholder='name'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    className='p-2 w-full border-2 rounded-md'
                  />
                </div>

                <div>
                  <label htmlFor='location'>Location</label>
                  <input
                    required
                    type='text'
                    placeholder='Location'
                    name='location'
                    value={data.location}
                    onChange={handleChange}
                    className='p-2 w-full border-2 rounded-md'
                  />
                </div>
              </div>
            )}

            <div className='flex flex-col gap-2'>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  type='email'
                  placeholder='email'
                  name='email'
                  onChange={handleChange}
                  className='p-2 w-full border-2 rounded-md'
                />
              </div>

              <div>
                <label htmlFor='password'>Password</label>
                <input
                  required
                  type='password'
                  placeholder='password'
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                  className='p-2 w-full border-2 rounded-md'
                />
              </div>

              <div>
                <label htmlFor='passwordConfirm'>Confirm Password</label>{" "}
                {/* Fixed the name here */}
                <input
                  required
                  type='password'
                  placeholder='confirm password'
                  name='passwordConfirm'
                  value={data.passwordConfirm}
                  onChange={handleChange}
                  className='p-2 w-full border-2 rounded-md'
                />
              </div>
            </div>
            <div className='flex gap-2 mt-2 flex-col-reverse'>
              <span
                className='m-auto w-[79%]'
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                {isSignUp
                  ? `Already have an account? Login`
                  : `Don't have an account? Create An Account`}
              </span>
              <button
                className='bg-red-600 mx-auto mt-4 w-[100%] p-2 border-2 border-red-600 rounded-md'
                type='submit'
                disabled={loading}
              >
                {loading
                  ? "Loading..."
                  : isSignUp
                  ? "Create New Account"
                  : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
