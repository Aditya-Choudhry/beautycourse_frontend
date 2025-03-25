
# Beauty Training Course Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for connecting beauty training providers with students.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://0.0.0.0:3000](http://0.0.0.0:3000) with your browser to see the result.

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

## Development Setup
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
