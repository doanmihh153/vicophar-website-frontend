# Newsletter Email Service Setup

## Overview
This guide explains how to integrate an email service provider for the newsletter subscription feature.

## Supported Email Services

### 1. Resend (Recommended)
**Pros**: Modern, developer-friendly, generous free tier
**Free Tier**: 3,000 emails/month

```bash
npm install resend
```

```javascript
// lib/email/resend.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email, token) {
    await resend.emails.send({
        from: 'Vicophar <newsletter@vicophar.com>',
        to: email,
        subject: 'Xác nhận đăng ký nhận tin',
        html: `<p>Click vào link để xác nhận: <a href="${process.env.NEXT_PUBLIC_URL}/api/newsletter/verify?token=${token}">Xác nhận</a></p>`,
    });
}
```

### 2. SendGrid
**Pros**: Reliable, feature-rich, good documentation
**Free Tier**: 100 emails/day

```bash
npm install @sendgrid/mail
```

### 3. AWS SES
**Pros**: Scalable, cost-effective for high volume
**Pricing**: $0.10 per 1,000 emails

## Environment Variables

Add to `.env.local`:

```env
# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# AWS SES
AWS_ACCESS_KEY_ID=xxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxx
AWS_REGION=us-east-1

# App URLs
NEXT_PUBLIC_URL=http://localhost:3000
```

## Database Integration

### PostgreSQL (Recommended)

```sql
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    verification_token VARCHAR(255),
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Prisma Schema

```prisma
model NewsletterSubscriber {
    id                 String    @id @default(uuid())
    email              String    @unique
    status             String    @default("pending")
    verificationToken  String?
    verifiedAt         DateTime?
    createdAt          DateTime  @default(now())
}
```

## Next Steps

1. Choose an email service provider
2. Sign up and get API key
3. Add environment variables
4. Update `/api/newsletter/subscribe/route.js` to send emails
5. Test the flow end-to-end
