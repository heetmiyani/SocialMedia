// utils.js
// This file can contain utility functions that may be used across multiple components, such as API calls, data formatting, or DOM manipulation helpers.

// Example: API request function
async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    return response.json();
  }
  
  // Example: DOM manipulation helper
  function createElement(type, className, content) {
    const element = document.createElement(type);
    element.classList.add(className);
    element.textContent = content;
    return element;
  }
  
  // Export utility functions
  export { fetchData, createElement };