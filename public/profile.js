// profile.js
const baseUrl = '/api/users/profile';

// Fetch and render user profile
async function fetchAndRenderProfile() {
  const url = `${baseUrl}`;
  const response = await fetch(url);
  const userProfile = await response.json();

  const userInfoElement = document.getElementById('user-info');
  // Render user profile information
  const userAvatar = document.createElement('img');
  userAvatar.src = userProfile.avatarUrl;
  userInfoElement.appendChild(userAvatar);

  const userName = document.createElement('h3');
  userName.textContent = userProfile.name;
  userInfoElement.appendChild(userName);

  const userPostsContainer = document.getElementById('user-posts');
  userPostsContainer.innerHTML = '';

  userProfile.posts.forEach((post) => {
    const postElement = createPostElement(post);
    userPostsContainer.appendChild(postElement);
  });
}

// Update user profile
async function updateProfile(updatedData) {
  const url = `${baseUrl}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  };

  const response = await fetch(url, options);
  const updatedProfile = await response.json();
  // Handle response and update user profile
  fetchAndRenderProfile();
}

// Initialize profile functionality
function init() {
  fetchAndRenderProfile();
  // Add event listeners for profile updates
}

init();