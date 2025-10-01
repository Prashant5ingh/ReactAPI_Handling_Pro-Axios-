# Backend API Server

This folder contains the Express.js backend server for the React API Handling project.

## Features

- **Express API Endpoint:**  
  Serves product data at `/api/products`.  
  Supports optional search via query parameter (`/api/products?search=...`).

- **Product Filtering:**  
  Filters products by title (case-insensitive) when the `search` query parameter is provided.

- **Simulated Network Delay:**  
  Uses a 2-second delay before responding to simulate real-world API latency.

## Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the server:**
   ```sh
   npm start
   ```
   The server will run on port `5000` by default.

3. **API Endpoints:**
   - Get all products:  
     `GET http://localhost:5000/api/products`
   - Search products by title:  
     `GET http://localhost:5000/api/products?search=steel`

## Technologies

- [Express](https://expressjs.com/) (v5)
- Node.js

## Notes

- The product data is hardcoded for demonstration purposes.
- The server is designed to work with the frontend in the `Frontend` folder.
