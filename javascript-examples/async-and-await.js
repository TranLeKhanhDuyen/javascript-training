const getFirstUserData = () => {
  // get users list
  return (
    fetch("/users.json")
      // parse JSON
      .then((response) => response.json())
      // pick first user
      .then((users) => users[0])
      // get user data
      .then((user) => fetch(`/users/${user.name}`))
      // parse JSON
      .then((userResponse) => response.json())
  );
};
getFirstUserData();

//here is the same functionality provided using await/async
const getSecondtUserData = async () => {
  // get users list
  const response = await fetch("/users.json");
  // parse JSON
  const users = await response.json();
  // pick first user
  const user = users[0];
  // get user data
  const userResponse = await fetch(`/users/${user.name}`);
  // parse JSON
  const userData = await user.json();
  return userData;
};
