# EmailJS Setup Guide

To make your contact form actually send emails, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and authenticate
5. Note down your **Service ID** (looks like: `service_xxxxxxxxx`)

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New message from {{from_name}} via Portfolio

**HTML Content:**
```html
<html>
<body>
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><small>Sent from your portfolio contact form</small></p>
</body>
</html>
```

4. Save the template and note down your **Template ID** (looks like: `template_xxxxxxxxx`)

## 4. Get Your Public Key
1. Go to **Account** -> **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

## 5. Update Your Code
Replace the placeholder values in `src/components/sections/Contact.tsx`:

```typescript
const emailData = {
  service_id: 'service_your_actual_service_id', // Replace with your Service ID
  template_id: 'template_your_actual_template_id', // Replace with your Template ID
  user_id: 'your_actual_public_key', // Replace with your Public Key
  template_params: {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Dikshit Jaswal',
    reply_to: formData.email
  }
};
```

## 6. Test Your Form
1. Fill out the contact form on your website
2. Check the browser console for detailed logs
3. You should receive an email at `dikshitjaswal1922@gmail.com`

## How to Verify Email is Sent

### Console Logs
Open browser dev tools and check console:
- `Sending email with data:` - Shows form data being sent
- `EmailJS response status: 200` - Success status
- `Email sent successfully to dikshitjaswal1922@gmail.com` - Confirmation

### Email Delivery
- Check your inbox at `dikshitjaswal1922@gmail.com`
- Look for emails with subject: "New message from [Name] via Portfolio"
- Check spam folder if not in inbox

### Browser Notifications
- If you allow notifications, you'll get a browser notification when email sends successfully

## Troubleshooting

**Error: "Email service not configured"**
- You haven't replaced the placeholder IDs yet
- Follow steps 1-5 above

**Error: "Invalid service ID"**
- Double-check your service ID from EmailJS dashboard
- Make sure you copied the full ID including "service_" prefix

**No email received**
- Check your spam folder
- Verify EmailJS service is connected to your email
- Check EmailJS dashboard for delivery logs

## Alternative Solutions

If EmailJS doesn't work for you, consider:
1. **Formspree** - Simple form handling service
2. **Netlify Forms** - If hosting on Netlify
3. **Backend API** - Create your own email endpoint with Node.js

## Security Notes
- Your Public Key is safe to expose in frontend code
- EmailJS handles the secure email sending
- No server-side code needed
