
const UserInfoCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
        <p><b>Brugernavn:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Rolle:</b> {user.role?.name}</p>
    </div>
  )
}

export default UserInfoCard;