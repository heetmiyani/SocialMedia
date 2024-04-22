// search.js
const baseUrl = '/api/search';

// Search for users or posts
async function search(query) {
  const url = `${baseUrl}?q=${query}`;
  const response = await fetch(url);
  const results = await response.json();

  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = '';

  results.forEach((result) => {
    const resultElement = createSearchResultElement(result);
    searchResultsContainer.appendChild(resultElement);
  });
}

// Create a search result element
function createSearchResultElement(result) {
  const resultElement = document.createElement('div');
  resultElement.classList.add('search-result');

  // Add search result content
  const resultTitle = document.createElement('h4');
  resultTitle.textContent = result.title;
  resultElement.appendChild(resultTitle);

  const resultDescription = document.createElement('p');
  resultDescription.textContent = result.description;
  resultElement.appendChild(resultDescription);

  return resultElement;
}

// Initialize search functionality
function init() {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = document.getElementById('search-input').value;
    await search(searchQuery);
  });
}

init();