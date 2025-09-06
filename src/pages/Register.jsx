import { useState, useEffect } from 'react';
import { z } from "zod";
import { Form, useActionData, useNavigate } from 'react-router';
import Banner from '../components/Banner.jsx';

const Register = () => {
  const navigate = useNavigate();
  const registerResult = useActionData();
  // console.log(registerResult);

  useEffect(() => {
    if (registerResult?.success) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [registerResult, navigate]);

  return (
    <div className="">
      <Banner bannerText="Account Register" secondText={true}  registerText="Register"/>
      <div className="w-full mx-auto max-w-md bg-white border border-gray-200 rounded-lg shadow p-8 mt-6">
        <h2 className="text-xl font-semibold text-center mb-6">
          Opret bruger hos Din Mægler
        </h2>
        <Form method="POST" className="space-y-5">
          {registerResult?.success ? 
            (<p className="text-green-600">🎉 Registration successful! Redirecting to login page...</p>
            ) : (
              <>
                <div>
                  <label htmlFor="username" className="text-sm text-gray-700">
                    Fulde navn
                  </label>            
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="At least 3 characters"
                    className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
                  />
                  <p className="text-red-600 text-sm">{registerResult?.username?._errors?.[0] || ""}</p>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-gray-700">
                    Email adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email adresse"
                    className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
                  />
                  <p className="text-red-600 text-sm">{registerResult?.email?._errors?.[0] || ""}</p>
                </div>
                <div>
                  <label htmlFor="password" className="text-sm text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="At least 4 characters"
                    className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
                  />
                  <p className="text-red-600 text-sm">{registerResult?.password?._errors?.[0] || ""}</p>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="text-sm text-gray-700">
                    Bekræft password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Bekræft password"
                    className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
                  />
                  <p className="text-red-600 text-sm">{registerResult?.confirmPassword?._errors?.[0] || ""}</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#0a1a33] hover:bg-[#13284d] text-white font-semibold py-2 px-4 rounded-md transition"
                >
                  Opret bruger
                </button>
              </>
           )}
        </Form>
      </div>
    </div>
  );
};

export default Register;