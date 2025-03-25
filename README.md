
# Beauty Training Course Platform

## Project Overview
This is a Next.js project for connecting beauty training providers with students, featuring both frontend and backend components.

## Environment Configuration
Create or modify `.env` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## Project Structure

### Frontend (Next.js)
- **Routing**: All routes are located in the `app` directory following Next.js 13+ app router convention
  - Main pages:
    - `/` - Home page
    - `/about` - About page
    - `/find-course` - Course search
    - `/join-provider` - Provider registration
    - `/signIn` - Login page
    - `/SignUp` - Registration page
  - Admin pages:
    - `/AdminDash` - Admin dashboard
    - `/AdminLead` - Lead management
    - `/AdminProvider` - Provider management
    - `/AdminSubs` - Subscription management
  - User pages:
    - `/UserProfile` - User profile
    - `/UserSubs` - User subscriptions
    - `/UserLeads` - User leads
    - `/UserView` - User view

### Backend (Express)
- Located in `server` directory
- Main components:
  - `server/index.js` - Main server file
  - `server/routes` - API routes
  - `server/config` - Configuration files
  - `server/models` - Database models
  - `server/middleware` - Custom middleware

### Components
- Reusable components are in `components` directory
  - `Navbar.js` - Navigation component
  - `Footer.js` - Footer component

### Assets
- All static assets (images, icons) are in `public` directory

## Development
1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Start backend server:
```bash
node server/index.js
```

## Configuration Updates
- Update MongoDB connection: Modify `MONGO_URI` in `.env`
- Update JWT secret: Modify `JWT_SECRET` in `.env`
- Update API routes: Modify files in `server/routes`
- Update frontend routes: Add/modify directories in `app` folder

## Important Files
- `app/layout.js` - Root layout with navigation logic
- `server/index.js` - Express server configuration
- `tailwind.config.js` - Styling configuration
- `.env` - Environment variables
