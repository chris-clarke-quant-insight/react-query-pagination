const User = ({ user }) => {
  const { user_id, username, email, password_hash, created_at, updated_at } = user;
  return (<>
      <div>id: {user_id}</div>
      <div>username: {username}</div>
      <div>email: {email}</div>
      <div>password_hash: {password_hash}</div>
      <div>created_at: {created_at}</div>
      <div>updated_at: {updated_at}</div>
  </>)
} // Move to a new file

export default User;