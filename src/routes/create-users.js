const users = [];

function createUser({ name, email, password }) {
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);

  return newUser;
}
