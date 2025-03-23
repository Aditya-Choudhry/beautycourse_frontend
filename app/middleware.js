
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // Protected routes based on role
  const adminRoutes = pathname.startsWith('/AdminDash') || 
                     pathname.startsWith('/AdminLead') || 
                     pathname.startsWith('/AdminProvider') || 
                     pathname.startsWith('/AdminSubs');
                     
  const providerRoutes = pathname.startsWith('/provider');
  const userRoutes = pathname.startsWith('/User');

  if ((adminRoutes || providerRoutes || userRoutes) && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/AdminDash/:path*',
    '/AdminLead/:path*',
    '/AdminProvider/:path*',
    '/AdminSubs/:path*',
    '/UserLeads/:path*',
    '/UserProfile/:path*',
    '/UserSubs/:path*',
    '/UserView/:path*',
    '/provider/:path*'
  ],
};
