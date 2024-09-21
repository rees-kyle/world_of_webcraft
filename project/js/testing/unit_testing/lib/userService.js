// export an asynchronous function to get a user profile
export async function getUserProfile(userId, fetchUserData = fetchUserDataFunction) {
  // fetch user data using the provided function
  const userData = await fetchUserData(userId);

  // return a formatted string with the user's name
  return `User Profile: ${userData.name}`;
}

// define a private asynchronous function to fetch user data
async function fetchUserDataFunction(userId) {
  // original implementation for fetching user data
  // (e.g., fetching from a database or API)
}