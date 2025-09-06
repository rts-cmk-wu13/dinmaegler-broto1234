import { useState, useEffect } from "react";
import building from "../assets/building.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Nyhedsbrev() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 4500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // --- POST: Subscribe ---
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("This email may already be subscribed.");

      setMessage("✅ Successfully subscribed!");
      setEmail("");
      // sessionStorage.setItem('email', email);
    } catch (error) {
      setMessage("❌ Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // --- DELETE: Unsubscribe ---
  // const handleUnsubscribe = async (e) => {
  //   e.preventDefault();
  //   setMessage("");
  //   setLoading(true);

  //   try {
  //     const response = await fetch(
  //       `https://dinmaegler.onrender.com/subscribers/${email}`,
  //       { method: "DELETE" }
  //     );

  //     if (!response.ok) throw new Error("Request failed.");

  //     const data = await response.json();

  //     if (data.length === 0) {
  //       setMessage("⚠️ No subscriber found with this email.");
  //     } else {
  //       setMessage("Successfully unsubscribed!");
  //       setEmail("");
  //       sessionStorage.removeItem('email');
  //     }
  //   } catch (error) {
  //     setMessage("❌ Failed: " + error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="py-12 md:py-18 text-white relative" style={{
        backgroundImage: `url(${building})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#162A41",
          opacity: 0.9,
          zIndex: 0,
        }}
      ></div>
      <div className="container text-center space-y-2 sm:space-y-0 sm:grid grid-cols-2 gap-2 items-center relative z-10">
        <p className="text-xs md:text-sm lg:text-xl max-w-90">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
        <form onSubmit={handleSubscribe} className="relative">
          <div className="flex max-w-md rounded-sm bg-white px-3 py-2 ">
            <input 
            type="email"
             placeholder="Indtast din email adresse" 
             value={email}
             required
             onChange={(e) => setEmail(e.target.value)}
             className="min-w-0 flex-auto  text-sm text-cPara outline-0 outline-offset-0 outline-primary" 
             />
          <button
           type="submit" 
           className="cursor-pointer"><FaArrowRight style={{ color: "#455463" }} />
           </button>
          </div>
          <div className="absolute top-6 right-[50%]">
            {message && (
              <p
                className={`mt-4 text-center ${
                  message.startsWith("✅") || message.startsWith("🗑️")
                    ? "text-green-600"
                    : message.startsWith("⚠️")
                    ? "text-yellow-600"
                    : "text-orange-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>                
    </div>
    </section>
  );
}
