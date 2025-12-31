/**
 * ============================================================================
 * NEWSLETTER SUBSCRIPTION API - ĐĂNG KÝ NHẬN TIN
 * ============================================================================
 *
 * API endpoint để xử lý đăng ký nhận tin tức qua email
 *
 * METHOD: POST
 * ENDPOINT: /api/newsletter/subscribe
 *
 * REQUEST BODY:
 * {
 *   email: string (required) - Email người dùng
 *   consent: boolean (required) - Đồng ý nhận tin
 *   source: string (optional) - Nguồn đăng ký (homepage, footer, etc.)
 * }
 *
 * RESPONSE (Success):
 * {
 *   success: true,
 *   message: "Đăng ký thành công! Vui lòng kiểm tra email để xác nhận."
 * }
 *
 * RESPONSE (Error):
 * {
 *   success: false,
 *   error: "Email đã được đăng ký trước đó"
 * }
 *
 * TODO:
 * - Integrate with email service (SendGrid/Resend/AWS SES)
 * - Implement database storage
 * - Add email verification flow
 * - Implement rate limiting
 *
 * ============================================================================
 */

import { NextResponse } from "next/server";

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * In-memory store for demo purposes
 * TODO: Replace with actual database (PostgreSQL, MongoDB, etc.)
 */
const subscribers = new Set();

/**
 * Rate limiting store (IP -> timestamp[])
 * TODO: Replace with Redis or database-backed solution
 */
const rateLimitStore = new Map();

/**
 * Rate limit configuration
 */
const RATE_LIMIT = {
    maxRequests: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
};

/**
 * Check rate limit for IP address
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const requests = rateLimitStore.get(ip) || [];

    // Remove old requests outside the time window
    const recentRequests = requests.filter(
        (timestamp) => now - timestamp < RATE_LIMIT.windowMs
    );

    if (recentRequests.length >= RATE_LIMIT.maxRequests) {
        return false;
    }

    // Add current request
    recentRequests.push(now);
    rateLimitStore.set(ip, recentRequests);

    return true;
}

/**
 * POST /api/newsletter/subscribe
 */
export async function POST(request) {
    try {
        // Get client IP for rate limiting
        const ip =
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Quá nhiều yêu cầu. Vui lòng thử lại sau 1 giờ.",
                },
                { status: 429 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { email, consent, source = "homepage" } = body;

        // Validate required fields
        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Email là bắt buộc",
                },
                { status: 400 }
            );
        }

        if (!consent) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Vui lòng đồng ý nhận tin",
                },
                { status: 400 }
            );
        }

        // Validate email format
        const normalizedEmail = email.trim().toLowerCase();
        if (!EMAIL_REGEX.test(normalizedEmail)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Email không hợp lệ",
                },
                { status: 400 }
            );
        }

        // Check if email already exists
        if (subscribers.has(normalizedEmail)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Email đã được đăng ký trước đó",
                },
                { status: 409 }
            );
        }

        // Add to subscribers (in-memory for now)
        subscribers.add(normalizedEmail);

        // TODO: Save to database
        // await db.newsletterSubscribers.create({
        //     email: normalizedEmail,
        //     source,
        //     ip,
        //     status: 'pending',
        //     verificationToken: generateToken(),
        // });

        // TODO: Send verification email
        // await sendVerificationEmail(normalizedEmail);

        // Log subscription (for development)
        console.log("Newsletter subscription:", {
            email: normalizedEmail,
            source,
            ip,
            timestamp: new Date().toISOString(),
        });

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message:
                    "Đăng ký thành công! Cảm ơn bạn đã quan tâm đến Vicophar.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Newsletter subscription error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/newsletter/subscribe
 * Return method not allowed
 */
export async function GET() {
    return NextResponse.json(
        {
            success: false,
            error: "Method not allowed",
        },
        { status: 405 }
    );
}
