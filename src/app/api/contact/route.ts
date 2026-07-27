import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Map subject values to readable labels
    const subjectLabels: Record<string, string> = {
      appointment: "Book an Appointment",
      consultation: "Second Opinion / Consultation",
      inquiry: "General Inquiry",
      referral: "Physician Referral",
      other: "Other",
    };

    const subjectLabel = subjectLabels[subject] || subject;

    // Compose email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f8fd; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0b3b80, #1a5fc7); padding: 28px 32px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #b8d4ff; font-size: 13px; }
    .body { padding: 32px; }
    .field { margin-bottom: 18px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #1f2937; background: #f9fafb; padding: 10px 14px; border-radius: 8px; border: 1px solid #e5e7eb; }
    .field-value.msg { white-space: pre-wrap; line-height: 1.6; }
    .divider { height: 1px; background: #e5e7eb; margin: 24px 0; }
    .footer { text-align: center; padding: 20px 32px; background: #f9fafb; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    .badge { display: inline-block; background: #d32537; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">New Contact Form Submission</div>
      <h1>Message from ${escapeHtml(name)}</h1>
      <p>Submitted via drnisarga.com contact form</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Full Name</div>
        <div class="field-value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value">${escapeHtml(email)}</div>
      </div>
      <div class="field">
        <div class="field-label">Phone Number</div>
        <div class="field-value">${phone ? escapeHtml(phone) : "Not provided"}</div>
      </div>
      <div class="field">
        <div class="field-label">Subject</div>
        <div class="field-value">${escapeHtml(subjectLabel)}</div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value msg">${escapeHtml(message)}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the contact form on <strong>drnisarga.com</strong></p>
      <p style="margin-top:4px;">You can reply directly to ${escapeHtml(email)} to respond to this inquiry.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "Dr. Nisarga Website <onboarding@resend.dev>",
      to: ["drnisarga@gmail.com"],
      replyTo: email,
      subject: `[drnisarga.com] ${subjectLabel} — ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send your message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send your message. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}

/**
 * Escape HTML special characters to prevent XSS in email content
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
