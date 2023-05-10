export const getUsersBlogs = async (users) => {
  try {
    const response = await fetch(`https://api.github.com/users/${users}`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

// // examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
