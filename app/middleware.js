
import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('token')?.value
  const isPublicPath = path === '/signIn' || path === '/SignUp'
  
  // If trying to access auth pages while logged in
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // If trying to access protected routes without auth
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signIn', request.url))
  }

  // Role-based access control
  if (token) {
    const userRole = getUserRoleFromToken(token) // You'll need to implement this
    
    // Admin routes protection
    if (path.startsWith('/Admin') && userRole !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    
    // Provider routes protection
    if (path.startsWith('/Provider') && userRole !== 'provider') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    
    // User/Student routes protection
    if ((path.startsWith('/User') || path.startsWith('/Student')) && userRole !== 'user') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/signIn',
    '/SignUp',
    '/Admin/:path*',
    '/Provider/:path*',
    '/User/:path*',
    '/Student/:path*',
    '/Verify:path*'
  ]
}
