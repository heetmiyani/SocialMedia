// feed.js
const baseUrl = '/api/posts';

// Fetch and render posts in the feed
async function fetchAndRenderPosts() {
  const url = `${baseUrl}`;
  const response = await fetch(url);
  const posts = await response.json();

  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';

  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

// Create a post element
function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Add post content and interactions (like, comment, share)
  const postHeader = document.createElement('div');
  postHeader.classList.add('post-header');
  postHeader.textContent = `${post.author.name} said:`;
  postElement.appendChild(postHeader);

  const postContent = document.createElement('p');
  postContent.classList.add('post-content');
  postContent.textContent = post.content;
  postElement.appendChild(postContent);

  return postElement;
}

// Initialize feed functionality
function init() {
  fetchAndRenderPosts();
  // Add event listeners for post interactions
}

init();