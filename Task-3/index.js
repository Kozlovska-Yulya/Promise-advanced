export const getUsersBlogs = async (usersList) => {
  try {
    const requests = usersList.map((userId) =>
      fetch(`https://api.github.com/users/${userId}`).then((response) =>
        response.json()
      )
    );
    const usersData = await Promise.all(requests);
    return usersData.map(({ blog }) => blog);
  } catch (err) {
    throw new Error('Failed to load data');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
