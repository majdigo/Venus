import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ipAddress } from '@vercel/functions';

// Cookie name for sticky A/B test assignment
const AB_TEST_COOKIE_NAME = 'venus_quote_funnel_ab_test';

export function middleware(request: NextRequest) {
    // We only intercept requests directed towards the quote tunnel (Lead Generation Engine)
    if (!request.nextUrl.pathname.startsWith('/devis')) {
        return NextResponse.next();
    }

    const response = NextResponse.next();

    // Check if user is already assigned to a variant
    let variant = request.cookies.get(AB_TEST_COOKIE_NAME)?.value;

    // If no variant exists, assign one randomly (Edge compute)
    if (!variant) {
        // Simple 50/50 split math
        const isVariantB = Math.random() > 0.5;
        variant = isVariantB ? 'variant-B' : 'control-A';

        // Log the distribution decision for debugging in Vercel Edge Logs
        console.log(`[A/B Test] Assigned new session to ${variant}`);

        // Persist the decision in a cookie for 30 days so the user doesn't flip-flop variants
        response.cookies.set(AB_TEST_COOKIE_NAME, variant, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            httpOnly: false, // Allow frontend JS to read it for localized tracking mapping
            sameSite: 'lax',
        });
    }

    // Pass the variant via a custom header so Server Components can read it
    response.headers.set('x-ab-variant', variant);

    return response;
}

// Ensure the middleware ONLY runs on specific paths to conserve Edge compute cycles
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - studio (Sanity CMS)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|studio).*)',
    ],
};
