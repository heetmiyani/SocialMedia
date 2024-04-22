// create-post.js
const baseUrl = '/api/posts';

// Create a new post
async function createPost(postData) {
  const url = `${baseUrl}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  const response = await fetch(url, options);
  const newPost = await response.json();
  // Handle response and post creation
  console.log('New post created:', newPost);
}

// Initialize create post functionality
function init() {
  const postForm = document.getElementById('post-form');
  postForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const postContent = document.getElementById('post-content').value;
    const postMedia = document.getElementById('post-media').files[0];

    const postData = {
      content: postContent,
      media: postMedia,
    };

    await createPost(postData);
    // Clear form fields and update feed
    postForm.reset();
    // Add code to update the feed with the new post
  });
}

init();