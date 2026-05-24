# MERN Stack Application

A comprehensive REST API built with the MERN stack (MongoDB, Express.js, React, Node.js) for managing users and products with authentication.

**Repository:** [https://github.com/Busam-Snigdha-Reddy/Lucky.git](https://github.com/Busam-Snigdha-Reddy/Lucky.git)

## Features

- User authentication with JWT tokens
- User registration and login
- Product management (CRUD operations)
- Middleware for token verification
- MongoDB database integration with Mongoose ODM
- RESTful API endpoints

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** dotenv for environment variables

## Project Structure

```
.
├── models/
│   ├── userModel.js          # User schema and model
│   └── productModel.js       # Product schema and model
├── middlewares/
│   └── verifyToken.js        # JWT token verification middleware
├── userAPI.js                # User authentication routes
├── productAPI.js             # Product management routes
├── server.js                 # Main server entry point
├── package.json              # Project dependencies
└── request.http              # HTTP requests for testing
```

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas account
- npm package manager

### Steps

1. **Generate package.json**
   ```bash
   npm init -y
   ```

2. **Set module type to ES6**
   - Update `package.json` with `"type": "module"` to use import/export syntax

3. **Install Express**
   ```bash
   npm install express
   ```

4. **Install Mongoose for MongoDB**
   ```bash
   npm install mongoose
   ```

5. **Create server.js**
   - Set up HTTP server with Express
   - Configure port (default: 3000)

### MongoDB Setup

**Architecture Overview:**
```
REST API ──→ Mongoose ODM (Object Document Mapping) ──→ MongoDB Server
```

**Process:**
1. Install and import Mongoose
2. Create schemas as blueprints for documents
3. Create models for resources (User, Product)
4. Perform database operations using models

## API Endpoints

### User Routes (`userAPI.js`)
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login user and get JWT token

### Product Routes (`productAPI.js`)
- GET `/products` - Get all products
- POST `/products` - Create a new product (requires token)
- PUT `/products/:id` - Update product (requires token)
- DELETE `/products/:id` - Delete product (requires token)

## Running the Application

```bash
npm install
node server.js
```

Server will start on `http://localhost:3000`

## Testing

Use the provided `request.http` file to test all API endpoints with your HTTP client.

## Authentication

Protected routes use JWT token verification middleware (`verifyToken.js`). Include the token in the Authorization header:
```
Authorization: Bearer <your_token>
```

## Author

**Busam Snigdha Reddy**  
GitHub: [@Busam-Snigdha-Reddy](https://github.com/Busam-Snigdha-Reddy)

## Repository

Clone the repository:
```bash
git clone https://github.com/Busam-Snigdha-Reddy/Lucky.git
cd Lucky/MERN/WEEK-3
```

