import { useState } from 'react';
import { z } from "zod";
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner.jsx';

const RegistrationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username too long"),
    email: z
      .string()
      .email("Invalid email address"),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .max(72, "Password too long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords matcher ikke.",
    path: ["confirmPassword"],
  });


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    setSuccess(null);
    // const formData = new FormData(e.target);
    // const username = formData.get("username");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const confirmPassword = formData.get("confirmPassword");

    try {      
      const validated = await RegistrationSchema.parseAsync(formData);

      // localStorage.setItem("registrationData", JSON.stringify({ email: validated.email, password: validated.password }));
      // API call to register
    const response = await fetch("https://dinmaegler.onrender.com/auth/local/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: validated.username,
        email: validated.email,
        password: validated.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // API error
      setErrors({ general: data.error?.message || "Registrering fejlede." });
      return;
    }
      setSuccess("🎉 Registration successful! Redirecting to login page...");
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      // console.log(err);
      if (err.errors) {
        // Zod error: map field errors
        const fieldErrors = {};
        err.errors.forEach(e => {
          fieldErrors[e.path[0]] = e.message;
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ general: err.message || "Der opstod en fejl." });
      }
    }
  };

  return (
    <div className="">
      <Banner bannerText="Account Register" secondText={true}  registerText="Register"/>
      <div className="w-full mx-auto max-w-md bg-white border border-gray-200 rounded-lg shadow p-8 mt-6">
        <h2 className="text-xl font-semibold text-center mb-6">
          Opret bruger hos Din Mægler
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {success ? (<p className="text-green-600">{success}</p>) : (
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
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
            {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
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
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
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
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
          </div>
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          <div>
            <label htmlFor="confirmPassword" className="text-sm text-gray-700">
              Bekræft password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Bekræft password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
          </div>
          {/* {errors && <div className="text-red-500 text-sm mb-2">{errors}</div>} */}
          {errors.general && <div className="text-red-500 text-sm mb-2">{errors.general}</div>}
          {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
          <button
            type="submit"
            className="w-full bg-[#0a1a33] hover:bg-[#13284d] text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Opret bruger
          </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;