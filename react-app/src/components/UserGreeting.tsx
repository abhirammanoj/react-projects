interface props {
  isLoggedIn: boolean;
  username: string;
}

function UserGreetings({ isLoggedIn, username }: props) {
  if (isLoggedIn) {
    return <h2>Welcome {username}</h2>;
  }
  return <h2>User not logged in....</h2>;
}
export default UserGreetings;
