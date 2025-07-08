# Backend API Documentation

## Overview
This is a Node.js/Express backend with role-based authentication, Cloudinary file uploads, and MongoDB database.

## Features
- ✅ Role-based authentication (Admin, Client, User)
- ✅ JWT + Session authentication
- ✅ Cloudinary file uploads with axios
- ✅ MongoDB with Mongoose
- ✅ Passport.js authentication
- ✅ Protected routes with middleware
- ✅ File upload with multer

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Create Admin User
```bash
npm run create-admin
```
This creates an admin user with:
- Email: admin@example.com
- Password: admin123

### 4. Start Development Server
```bash
npm run dev
```

## API Endpoints

### Authentication

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user" // optional, defaults to "user"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Logout
```
POST /api/auth/logout
```

#### Get Current User
```
GET /api/auth/me
Authorization: Bearer <token>
```

### Admin Routes (Admin Only)

#### Create Admin User
```
POST /api/auth/admin
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "new_admin",
  "email": "admin2@example.com",
  "password": "password123"
}
```

#### Get All Users
```
GET /api/auth/users
Authorization: Bearer <token>
```

#### Update User Role
```
PUT /api/auth/users/:userId/role
Authorization: Bearer <token>
Content-Type: application/json

{
  "role": "admin" // "admin", "client", or "user"
}
```

#### Delete User
```
DELETE /api/auth/users/:userId
Authorization: Bearer <token>
```

### File Upload Routes

#### Upload Single File (Admin Only)
```
POST /api/upload/single
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
folder: "general" // optional
```

#### Upload Multiple Files (Admin Only)
```
POST /api/upload/multiple
Authorization: Bearer <token>
Content-Type: multipart/form-data

files: <files>
folder: "general" // optional
```

#### Upload Profile Image (Authenticated Users)
```
POST /api/upload/profile
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
```

#### Upload Blog Image (Admin/Client)
```
POST /api/upload/blog
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
```

#### Upload Product Image (Admin Only)
```
POST /api/upload/product
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
```

#### Delete File (Admin Only)
```
DELETE /api/upload/:publicId
Authorization: Bearer <token>
```

## Role-Based Access Control

### Roles
- **Admin**: Full access to all features
- **Client**: Access to blog uploads and limited features
- **User**: Basic user access

### Middleware
- `isAuthenticated`: Check if user is logged in
- `isAdmin`: Check if user has admin role
- `isClient`: Check if user has client role
- `isUser`: Check if user has user role
- `hasRole(['admin', 'client'])`: Check if user has any of the specified roles

## File Upload Features

### Supported File Types
- Images (JPEG, PNG, GIF, etc.)
- Documents (PDF, DOC, DOCX)

### File Size Limit
- Maximum 10MB per file

### Cloudinary Features
- Automatic image optimization
- Responsive images
- Secure URLs
- Folder organization
- Automatic format conversion

## Error Handling

All API responses follow this format:
```json
{
  "success": true/false,
  "message": "Response message",
  "data": {
    // Response data
  }
}
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Session-based authentication
- Role-based access control
- CORS configuration
- Helmet security headers
- Input validation
- File type validation

## Database Models

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['admin', 'client', 'user'], default: 'user')
}
```

## Development

### Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon
- `npm run create-admin`: Create initial admin user

### File Structure
```
backend/
├── config/
│   ├── cloudinary.js
│   ├── passport.js
│   └── session.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── auth.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── uploadRoutes.js
├── utils/
│   ├── cloudinaryUpload.js
│   └── db.js
├── scripts/
│   └── createAdmin.js
├── app.js
├── index.js
└── package.json
``` 