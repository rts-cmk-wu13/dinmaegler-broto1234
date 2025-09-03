import { useState } from 'react';
import { Form } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import { useAuth } from '../contexts/AuthContext';
import LoginMed from '../components/LoginMed';
import { API_BASE_URL } from "../config";

const LogIn = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  // console.log(error);

  const location = useLocation();
  const navigate = useNavigate();
  
  const { login } = useAuth();
  const from = location.state?.from.pathname || '/';
  console.log(from);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const response = await fetch(`${API_BASE_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const userData = await response.json();
    console.log(userData);

    if (response.ok) {
      login(userData.jwt, userData.user);
      setSuccess(`Login successful! - ${userData.user.username}`);
      setTimeout(() => navigate(from), 4500);
    } else {
      // Try to extract a useful error message
      let errorMsg = 'Login failed';
      if (userData.message && Array.isArray(userData.message) && userData.message[0]?.messages) {
        errorMsg = userData.message[0].messages[0].message;
      } else if (typeof userData.error === "string") {
        errorMsg = userData.error;
      } else if (typeof userData.message === "string") {
        errorMsg = userData.message;
      }
      setError(errorMsg);
    }    
  };

  return (
    <section className="log-in" >
      <Banner bannerText="Account Login" secondText={true} loginText="Login"/>
      <div className="w-90 mx-auto mt-6 py-12 flex flex-col gap-4">
        {error && <p className="text-red-600">{error}</p>}
        {success ? <p className=" text-2xl font-semibold text-green-600">{success}</p> : (<>
        <p className="font-semibold text-center text-lg text-headingColor">Log ind på din konto</p>
        <Form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="identifier">Email</label>
            <input
             type="email"
             id="identifier"
             name="identifier" 
             placeholder="Email" 
             autoComplete="email"
             className="border border-borderLine rounded-md p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="w-full flex justify-between border rounded px-3 py-2">
              <input
             type={showPassword ? "text" : "password"}
             id="password"
             name="password"
             placeholder="Password"
             autoComplete="current-password"
             className="w-full outline-none" />
             <div className="self-end right-0">
              <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className=" text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
             </div>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-inputbg text-white text-xl py-4 rounded-xs">Log ind</button>
        </Form>
        <LoginMed />
        </>)}        
      </div>
    </section>
  )
}

export default LogIn