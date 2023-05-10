export const getUsersBlogs = async (users) => {
  try {
    const requests = users
      .map((user) => fetch(`https://api.github.com/users/${user}`))
      .then((response) => response.json());

    const userData = await Promise.all(requests);
    return userData;
  } catch (err) {
    console.log(err);
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
