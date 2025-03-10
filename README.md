# Express MongoDB API

A Node.js application using Express and MongoDB for managing users and products. The application provides both a web interface for administration and the REST API endpoints to access the data.

## Features

- Admin interface for managing users and products
- REST API endpoints for retrieving data
- MongoDB integration
- Responsive interface with custom styling

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with your MongoDB connection string:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/express_api_db?retryWrites=true&w=majority
   ```
4. Start the application: `npm run dev`

## API Endpoints

- GET `/api/users` - Retrieve all users
- GET `/api/products` - Retrieve all products

## Admin Interface

- Dashboard: `/admin`
- Manage Users: `/admin/users`
- Manage Products: `/admin/products`

## Deployment URL

[[https://your-deployment-url.com](https://your-deployment-url.com)](https://express-mongodb-api-876o.onrender.com)
