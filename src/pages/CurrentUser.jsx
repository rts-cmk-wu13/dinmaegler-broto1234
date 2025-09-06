
import UserInfoCard from "../components/UserInfoCard.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

const CurrentUser = () => {
  
  const { token, user, loading } = useAuth();
  console.log(user);
  if (loading) return <div>Indlæser brugerdata...</div>;
  if (!token) return <div className="text-red-500">Du er ikke logget ind.</div>;
  if (!user) return <div>Indlæser brugerdata...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Din brugerprofil</h2>
      <UserInfoCard user={user} />
    </div>
  );
};

export default CurrentUser;