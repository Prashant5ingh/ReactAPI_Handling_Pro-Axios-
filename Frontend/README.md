# React API Handling Example (with Axios)
This file demonstrates professional API handling in React using Axios, including debouncing, error handling, and loading states.

# Key Features
- ## API Calls with Axios:
   Fetches product data from /api/products?search=... whenever the search input changes.

- ## Debouncing & Request Cancellation: Not yet implemented only race condition
   Uses AbortController to cancel previous API requests on every keystroke, preventing race conditions and unnecessary network calls.

- ## State Management:
   Manages products, errors, and loading states with React's useState hook.

- ## Conditional Rendering:
   Displays loading and error messages based on state.

- ## Search Functionality:
   Filters products by search input in real-time.

- ## Custom React Query Hook (commented):
   Shows how to create a reusable hook for API calls and caching.

# How It Works
- On every change to the search input, a new API request is made.
- If a new request starts before the previous one finishes, the previous request is aborted.
- Loading and error states are handled and displayed in the UI.
- The number of products is shown after successful fetch.

# Usage
- Type in the search box to filter products.
- "Loading..." animation appears while fetching.
- "Something Went Wrong !!!" appears if the API call fails.

# Technologies
- React (useState, useEffect)
- Axios
- Tailwind CSS (for simple loading animation)

# Note:
- The file also contains a template for a custom React Query-like hook for generic API handling, which is currently commented out.