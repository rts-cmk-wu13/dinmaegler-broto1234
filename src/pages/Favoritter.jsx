import { useEffect, useState } from "react";
import { redirect } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function Favoritter() {
  const [favoritter, setFavoritter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { token } = useAuth();
  if (!token) {
    redirect("/");
  }

  useEffect(() => {
    const fetchFavoritter = async () => {
      setIsLoading(true);
      const response = await fetch("https://dinmaegler.onrender.com/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setFavoritter(data);
      } else {
        redirect("/");
      }
      setIsLoading(false);
    };

    fetchFavoritter();
  }, [token]);

  return (
    <div>
      <h1>Favoritter</h1>
    </div>
  )
}
