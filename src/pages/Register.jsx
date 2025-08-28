import { useState } from 'react';
import { Form } from 'react-router';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simple validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Alle felter skal udfyldes.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords matcher ikke.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Noget gik galt. Prøv igen.");
      }

      const data = await response.json();
      console.log("Server response:", data);

      setSuccess("Bruger oprettet succesfuldt!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow p-8">
        <h2 className="text-xl font-semibold text-center mb-6">
          Opret bruger hos Din Mægler
        </h2>
        <Form className="space-y-5">
          <div>
            <label className="text-sm text-gray-700">
              Fulde navn
            </label>
            <input
              type="text"
              placeholder="Fulde navn"
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">
              Email adresse
            </label>
            <input
              type="email"
              placeholder="Email adresse"
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">
              Bekræft password
            </label>
            <input
              type="password"
              placeholder="Bekræft password"
              className="p-1 w-full rounded-xs border-2 border-gray-300 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0a1a33] hover:bg-[#13284d] text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Opret bruger
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;