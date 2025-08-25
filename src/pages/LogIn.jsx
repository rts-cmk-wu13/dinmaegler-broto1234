import { useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router';
import Banner from '../components/Banner';
import { useAuth } from '../contexts/AuthContext';

const LogIn = () => {
  const [error, setError] = useState();
  console.log(error);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const { login } = useAuth();
  const from = location.state?.from.pathname || '/';

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const response = await fetch('https://dinmaegler.onrender.com/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const userData = await response.json();

    console.log(userData.error);

    if (response.ok) {
      login(userData.jwt);
      navigate(from, { replace: true });
    } else {
      setError(userData.message || userData.error || 'Login failed');
    }    
  
};

  return (
    <section className="log-in" >
      <Banner bannerText="Account Login" secondText={true}/>
      <div className="w-90 mx-auto mt-6 py-12 flex flex-col gap-4">
        <p className="font-semibold text-center text-lg text-headingColor">Log ind på din konto</p>
        <Form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="identifier">Email</label>
            <input
             type="email"
             id="identifier"
             name="identifier" 
             placeholder="Email" 
             className="border border-borderLine rounded-md p-2" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
             type="password"
             id="password"
             name="password"
             placeholder="Password"
             className="border border-borderLine rounded-md p-2"
             required />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-inputbg text-white text-xl py-4 rounded-xs">Log ind</button>
        </Form>
      </div>
    </section>
  )
}

export default LogIn